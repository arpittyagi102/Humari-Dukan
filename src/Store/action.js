const addtocart = (data) => {
    return (dispatch) => {
      dispatch({
        type: 'addtocart',
        payload: data
      });
    };
  };

const updateCart = (data) => {
  return (dispatch) => {
    dispatch({
      type: 'updateCart',
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
  
  export { addtocart, updateCart, removefromcart };