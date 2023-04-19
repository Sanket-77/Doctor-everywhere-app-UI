const initialState = 0;
export const incdecReducer = (state = initialState, action: any)=> {
    if(action.type === 'Increment'){
        return state + 20
    }
    else if(action.type === 'Decrement'){
        return state - 20
    } 
    return state;
}