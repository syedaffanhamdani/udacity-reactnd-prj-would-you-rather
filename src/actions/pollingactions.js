export const RECEIVE_ANSWER = 'RECEIVE_ANSWER'
export const SAVE_ANSWER = 'SAVE_ANSWER'
export const SAVE_POLL = 'SAVE_POLL'
export const ADD_POLL_QUESTION = 'ADD_POLL_QUESTION'


export function receiveAnswer(questions) {
    return {
        type: RECEIVE_ANSWER,
        ...questions
    }

}

export function addPollQuestion (pollQuestions){
return {
    type: ADD_POLL_QUESTION,
    pollQuestions,
}
}

export function saveAnswer(authenticatedUser, questionId, answer){
    return{
        type: SAVE_ANSWER,
        authenticatedUser,
        questionId,
        answer
    }
}