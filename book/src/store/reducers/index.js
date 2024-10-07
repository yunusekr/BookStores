import { GET_CATEGORIES, GET_CURRENT_PRODUCT, GET_PRODUCTS } from "../actions";

const initialState = {
  products: [],
  categories: [],
  currentProduct: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS:
      return { ...state, products: action.payload };
    case GET_CATEGORIES:
      return { ...state, categories: action.payload };
    case GET_CURRENT_PRODUCT:
      return { ...state, currentProduct: action.payload };
    default:
      return state;
  }
};
