import { ADD_USERS, USER_ADD_QUESTION, USER_SAVE_ANSWER } from '../actions/users'

export default function users(state = {}, action) {
    switch (action.type) {
        case ADD_USERS:
            console.log('users reducer')
            console.log(action.users)
            return {
                ...state,
                ...action.users
            }
        case USER_ADD_QUESTION:
            return {
                ...state,
                [action.authenticatedUser]:{
                    ...state[action.authenticatedUser],
                    questions: state[action.authenticatedUser].questions.concat([action.id])
                }
            }
        case USER_SAVE_ANSWER:
            const {authenticatedUser,questionId, answer}= action  
            console.log(JSON.stringify(action))  
            console.log(JSON.stringify(authenticatedUser)) 
        return {
            ...state,
            [authenticatedUser]:{
                ...state[authenticatedUser],
                answers: {
                    ...state[authenticatedUser].answers,
                    [questionId]: answer
                }
            }
        }    
        default:
            return state
    }
}