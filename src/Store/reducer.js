const initialstate = [];

const reducer = (state = initialstate, action) => {
    

    if (action.type === 'addtocart'){
            console.log([...state,action.payload]);
            return ([...state,action.payload]);
    }
    else if(action.type === 'removefromcart'){
        const temp=[...state];
        temp.splice(action.payload.id,1);
        return ([...temp])
    }
    else
        return state;
}

export default reducer;