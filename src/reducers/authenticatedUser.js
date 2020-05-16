import {SET_AUTHENTICATED_USER} from '../actions/authenticatedUser'

export default function authenticatedUser(state=null,action){
    switch(action.type){
        case SET_AUTHENTICATED_USER:
            return action.userId //TODO: why no state is returned here, and just id?
        default:
            return state
    }
}