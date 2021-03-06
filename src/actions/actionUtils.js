import {addUsers,userSaveAnswer,userAddQuestion} from './users';
import {addPollQuestion,receiveInitialQuestions, savePollAnswer} from './questions'
import {showLoading,hideLoading} from 'react-redux-loading';
import {getQuestions, getUsers, saveQuestionAnswer, saveQuestion} from '../utils/MockAPI'

export function loadInitialPollData(){
    return(dispatch) => {
        dispatch(showLoading())
        return getQuestions().then(
            (questions) => {
                dispatch(receiveInitialQuestions(questions))
                dispatch(hideLoading())
            }
        ).catch(console.log('error getting questions')) // perhaps a catch here?
    }
}

export function loadInitialUsers (){
    return (dispatch) => {
        dispatch(showLoading())
        return getUsers().then((users)=>{
            console.log("dispatch result")
            console.log(users)
            dispatch(addUsers(users))
            dispatch(hideLoading())
        })
    }
}

export function handleSaveAnswer(questionId, answer){
    return (dispatch, getState) => {
        const {authenticatedUser} = getState()
        dispatch(showLoading())
        return saveQuestionAnswer({authenticatedUser,questionId,answer})
        .then(()=>{
            dispatch(savePollAnswer(authenticatedUser,questionId,answer))
            dispatch(userSaveAnswer(authenticatedUser,questionId,answer))
            dispatch(hideLoading())
        })
    }
}

export function handleAddQuestion(optionOne, optionTwo){
    return(dispatch, getState) =>{
        const {authenticatedUser} = getState()
        const author = authenticatedUser
        dispatch(showLoading())
        return saveQuestion({optionOne, optionTwo,author})
        .then((question)=>{
            dispatch(addPollQuestion(question))
            dispatch(userAddQuestion(authenticatedUser,question.id))
        })
    }


}