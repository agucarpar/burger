import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  RESET_INGREDIENT,
} from "../index";

const initialState = {
  ingredients: {
    tomatoe: 0,
    meat: 0,
    cheese: 0,
    salad: 0,
    bacon: 0,
  },
  ingredientSelected: {},
  totalPrice: 2,
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.payload]: state.ingredients[action.payload.payload] + 1,
        },
        totalPrice: state.totalPrice + action.payload.price,
      };
    case REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.payload]: state.ingredients[action.payload.payload] - 1,
        },
        totalPrice: state.totalPrice - action.payload.price,
      };
    case RESET_INGREDIENT:
      return {
        ...state,
        ingredients: initialState.ingredients,
        totalPrice: initialState.totalPrice
      };

    default:
      return state;
  }
};

export default mainReducer;
