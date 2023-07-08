const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === 'addtocart') {
    const temp = [...state];
    
    const existingProduct = temp.find((item) => {
      if (item.product.id === action.payload.id) {
        item.quantity += 1;
      }
      return item.product.id === action.payload.id
    });

    if(existingProduct) return ([...temp]);

    const newItem = {quantity: 1, product: action.payload};
    console.log([...temp, newItem]);
    return [...temp, newItem];
  } 
  else if (action.type === 'removefromcart') {
    const temp = [...state];
    temp.splice(action.payload.id, 1);
    return temp;
  } else {
    return state;
  }
};

export default reducer;
