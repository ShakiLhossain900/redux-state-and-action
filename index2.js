//middleware        /// redux-logger

//redux logger install korte hobe first            npm i --save redux-logger
//this redux logger showing the output the process like how redux work
const { createStore , applyMiddleware} = require("redux");
const { default: logger } = require("redux-logger");

// product states
const initialProductState = {
  products: ["sugar", "salt"],
  numberOfProducts: 2,
};

// product actions
const getProductAction = () => {
  return {
    type: "GET_PRODUCTS",
  };
};
const addProductAction = (product) => {
  return {
    type: "ADD_PRODUCTS",
    payload: product,
  };
};

const productsReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
      };
    case "ADD_PRODUCTS":
      return {
        products: [...state.products, action.payload],
        numberOfProducts: state.numberOfProducts + 1,
      };

    default:
      return state;
  }
};

const store = createStore(productsReducer, applyMiddleware(logger));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(getProductAction());
store.dispatch(addProductAction("pen"));
