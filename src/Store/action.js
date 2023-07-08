const addtocart = (data) => {
    return (dispatch) => {
      dispatch({
        type: 'addtocart',
        payload: data
      });
    };
  };
  
  const removefromcart = (itemId) => {
    return (dispatch) => {
      dispatch({
        type: 'removefromcart',
        payload: itemId,
      });
    };
  };
  
  export { addtocart, removefromcart };