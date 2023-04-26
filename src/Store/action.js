const addtocart = (data) => {
    return (dispatch) => {
        dispatch({
            type: 'addtocart',
            payload: data
        })
    }
}

const removefromcart = (data) => {
    console.log(data);
    return (dispatch) => {
        dispatch({
            type: 'removefromcart',
            payload: data
        })
    }
}

export {addtocart,removefromcart};