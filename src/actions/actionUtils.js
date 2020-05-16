import {addUsers,userSaveAnswer,userAddQuestion} from './users';
import {addPollQuestion,receiveInitialQuestions, savePollAnswer} from './questions'
import {showLoading,hideLoading} from 'react-redux-loading';
import {getQuestions, getUsers, saveQuestionAnswer, saveQuestion} from '../utils/MockAPI'
import {setAuthenticatedUser} from './authenticatedUser'

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

export function loadInitialUsers (AUTHENTICATIN_ID){
    return (dispatch) => {
        dispatch(showLoading())
        return getUsers().then((users)=>{
            console.log("dispatch result")
            console.log(users)
            dispatch(addUsers(users))
            dispatch(setAuthenticatedUser(AUTHENTICATIN_ID))
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
            dispatch(saveQuestionAnswer(authenticatedUser,questionId,answer))
            dispatch(userSaveAnswer())
            dispatch(savePollAnswer())
        })
    }
}

export function handleAddQuestion(optionOne, optionTwo){
    return(dispatch, getState) =>{
        const authenticatedUser = getState()
        dispatch(showLoading())
        return saveQuestion({optionOne, optionTwo,authenticatedUser})
        .then((questionInfo)=>{
            dispatch(addPollQuestion(questionInfo))
            dispatch(userAddQuestion(authenticatedUser,questionInfo.id))
        })
    }


}