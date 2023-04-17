const initialstate = [];

const reducer = (state = initialstate, action) => {
    if (action.type === 'addtocart')
        return ([...state,action.payload]);
    else
        return state;
}

export default reducer;