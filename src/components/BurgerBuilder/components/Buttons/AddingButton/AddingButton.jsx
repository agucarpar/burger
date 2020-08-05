import React from "react";

const AddingButton = (props) => {
  const { updateIncrementIngredientsActionCreator, ingredientObject } = props;

  return (
    <div>
      <button
        className="capitalize more"
        onClick={() =>
          updateIncrementIngredientsActionCreator(
            ingredientObject.ingredient,
            ingredientObject.price
          )
        }
      >
        +{ingredientObject.ingredient}
      </button>
    </div>
  );
};

export default AddingButton;
