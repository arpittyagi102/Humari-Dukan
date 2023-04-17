const initialstate = [];

const reducer = (state = initialstate, action) => {
    

    if (action.type === 'addtocart')
        {
            console.log(action.payload.title + " added to cart")
            return ([...state,action.payload]);
        }
    else if(action.type === 'removefromcart')
    {
        console.log(action.payload.title + " removed from cart")
        return ([
            ...state
        ])
    }
    else
        return state;
}

export default reducer;