const initialState = [];

const reducer = (state = initialState, action) => {
  if (action.type === 'addtocart') {
    const existingProduct = state.find((item) => item.id === action.payload.id);

    if (existingProduct) {
      const updatedState = state.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            count: item.count + 1,
            price: item.price + action.payload.price,
          };
        }
        return item;
      });

      console.log(updatedState);
      return updatedState;
    } else {
      console.log([...state, action.payload]);
      return [...state, action.payload];
    }
  } else if (action.type === 'removefromcart') {
    const temp = [...state];
    temp.splice(action.payload.id, 1);
    return temp;
  } else {
    return state;
  }
};

export default reducer;
