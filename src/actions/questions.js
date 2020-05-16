export const RECEIVE_INTIAL_QUESTIONS = 'RECEIVE_INITIAL_QUESTIONS'
export const SAVE_POLL_ANSWER = 'SAVE_POLL_ANSWER'
export const SAVE_POLL = 'SAVE_POLL'
export const ADD_POLL_QUESTION = 'ADD_POLL_QUESTION'



export function receiveInitialQuestions(questions) {
    return {
        type: RECEIVE_INTIAL_QUESTIONS,
        questions: {...questions}
    }

}

export function addPollQuestion (pollQuestions){
return {
    type: ADD_POLL_QUESTION,
    pollQuestions,
}
}

export function savePollAnswer(authenticatedUser, questionId, answer){
    return{
        type: SAVE_POLL_ANSWER,
        authenticatedUser,
        questionId,
        answer
    }
}