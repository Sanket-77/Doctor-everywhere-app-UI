export const initialState = {
    isAuthenticated: true
}

export const LoginReducer = (state = initialState, action:any)=> {
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated:action.logedIn
            }
            break;
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated:action.logedIn 
            }
        default: return {...state}
    }
}
