const initialState = [];

const reducer = (state = initialState, action) => {
  const newState = [...state];

  switch (action.type) {

    case 'addtocart':
      const existingProduct = newState.find((item) => {
        if (item.product.id === action.payload.id) {
          item.quantity += 1;
        }
        return item.product.id === action.payload.id
      });

      if(existingProduct) return ([...newState]);

      const newItem = {quantity: 1, product: action.payload};
      console.log([...newState, newItem],'addtoCart')
      return [...newState, newItem];
    case 'updateCart':
      newState.forEach((item) => {
        if (item.product.id === action.payload.productId) {
          if (action.payload.type === 'increase') {
            item.quantity += 1;
          } else {
            if (item.quantity > 1) {
              item.quantity -= 1;
            }
          }
        }
      });
      return ([...newState]);
    case 'removefromcart':
      const index = newState.findIndex(item => item.product.id === action.payload);
      console.log(index,'remove')
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
  
};

export default reducer;
