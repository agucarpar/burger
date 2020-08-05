import { ADD_INGREDIENT, REMOVE_INGREDIENT, INCREASE_TOTALPRICE, DECREASE_TOTALPRICE, RESET_INGREDIENT  } from "..";

const addingIngredientsActions = (payload) => {
  return {
    type: ADD_INGREDIENT,
    payload,
  };
};

const removingIngredientAction = (payload) => {
  return {
    type: REMOVE_INGREDIENT,
    payload,
  };
};

const increaseTotalPriceAction = (payload) => {
  return {
    type: INCREASE_TOTALPRICE,
    payload,
  };
};

const decreaseTotalPriceAction = (payload) => {
  return {
    type: DECREASE_TOTALPRICE,
    payload,
  };
};

const resetIngredientAction = () => {
  return {
    type: RESET_INGREDIENT,
  };
};


export {
  addingIngredientsActions,
  removingIngredientAction,
  increaseTotalPriceAction,
  decreaseTotalPriceAction,
  resetIngredientAction
};
