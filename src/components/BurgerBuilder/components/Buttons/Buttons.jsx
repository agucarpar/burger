import React from "react";
import ingredientList from "../../../utils/const/ingredientList";
import "../../burguerBuilder.css";
import PriceList from "../PriceList.jsx/PriceList";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  removingIngredientAction,
  resetIngredientAction,
  addingIngredientsActions,
} from "../../../../redux/actions/actions";
import ingredientsList from "../../../utils/const/ingredientList";
import RemovingButton from "./RemovingButton/RemovingButton";
import AddingButton from "./AddingButton/AddingButton";

const Buttons = (props) => {
  const dispatch = useDispatch();
  const totalPriceFromRedux = useSelector(
    (state) => state.totalPrice,
    shallowEqual
  );
  const ingredientsFromRedux = useSelector(
    (state) => state.ingredients,
    shallowEqual
  );

  const disableButtons = totalPriceFromRedux === 2 ? true : false;

  const updateIncrementIngredientsActionCreator = (payload, price) => {
    const payloadObject = {
      payload,
      price,
    };
    dispatch(addingIngredientsActions(payloadObject));
  };

  const updateRemovingIngredientsActionCreator = (payload, price) => {
    const payloadObject = {
      payload,
      price,
    };
    dispatch(removingIngredientAction(payloadObject));
  };

  const resetIngredientActionCreator = () => {
    dispatch(resetIngredientAction());
  };

  return (
    <div className="buildControl">
      <div className="center">
        <h4>Add your ingredients</h4>
        {ingredientsList.map((ingredientObject, key) => {
          return (
            <AddingButton
              key={key}
              updateIncrementIngredientsActionCreator={
                updateIncrementIngredientsActionCreator
              }
              ingredientObject={ingredientObject}
            />
          );
        })}
      </div>
      <div className="center">
        <PriceList />
      </div>

      <div className="center">
        <h4>Remove your ingredients</h4>
        {ingredientList.map((ingredientObject, key) => {
          const ingredientes = ingredientObject.ingredient;
          return (
            <RemovingButton
              key={key}
              disableButtons={disableButtons}
              ingredientsFromRedux={ingredientsFromRedux}
              ingredientes={ingredientes}
              ingredientObject={ingredientObject}
              updateRemovingIngredientsActionCreator={
                updateRemovingIngredientsActionCreator
              }
            />
          );
        })}
        <button
          onClick={() => resetIngredientActionCreator()}
          className="resetButton"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Buttons;
