export const SET_AUTHENTICATED_USER = 'SET_AUTHENTICATED_USER'

export function setAuthenticatedUser(userId){
    return {
        type: SET_AUTHENTICATED_USER,
        userId
    }
}