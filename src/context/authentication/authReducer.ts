export const initialState = {
    currentUser: JSON.parse(localStorage.getItem("user")!),
}

export type AppState = typeof initialState
export type Action =
| { type: 'LOGIN', payload: any }
| { type: 'LOGOUT' }

export const authReducer = (state: AppState, action: Action): any => {
    switch (action.type) {
        case 'LOGIN':
            return {
                currentUser: action.payload
            }
        case 'LOGOUT':
            return {
                currentUser: null
            }
        default:
            return state
    }
}
