import { RECEIVE_INTIAL_QUESTIONS, ADD_POLL_QUESTION, SAVE_POLL_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
    switch (action.type) {
        case RECEIVE_INTIAL_QUESTIONS:
            console.log("received action in reducer")
            console.log(JSON.stringify(action))
            return {
                ...state,
                 ...action.questions
            }
        case SAVE_POLL_ANSWER:
            const { authenticatedUser, questionId, answer } = action
            return {
                ...state,
                [questionId]: {
                    ...state[questionId],
                    [answer]: {
                        ...state[questionId][answer],
                        votes: state[questionId][answer].votes.concat([authenticatedUser])
                    }
                }
            }
            case ADD_POLL_QUESTION:
                console.log(`ADD_POLL_QUESTION_REDCER action is: ${JSON.stringify(action)}`)
                return {
                    ...state,
                    [action.pollQuestion.id]: action.pollQuestion
                }
        default:
            return state
    }
}