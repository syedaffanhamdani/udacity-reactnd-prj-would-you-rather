// following actions are possible with regard to users
// 1. users are added initiall, 2. users submit answers, 3. users add questions
export const ADD_USERS = 'ADD_USERS'
export const USER_SAVE_ANSWER = 'USER_SAVE_ANSWER'
export const USER_ADD_QUESTION = 'USER_ADD_QUESTION'

export function addUsers(users) {
    return {
        type: ADD_USERS,
        ...users
    }
}

export function userSaveAnswer(authenicatedUser, questionId, answer) {
    return {
        type: USER_SAVE_ANSWER,
        authenicatedUser,
        questionId,
        answer
    }
}

export function userAddQuestion(authenicatedUser, questionId) {
    return {
        type: USER_ADD_QUESTION,
        authenicatedUser,
        questionId
    }

}