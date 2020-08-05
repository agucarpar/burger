import React from "react";
import OrderList from "./OrderList";

const OrderIngredientsList = (props) => {
  const { ingredientsSelectedArray, ingredientsSelectedValues } = props;

  return (
    <div>
      {ingredientsSelectedValues && (
        <h3>Here is what you have ordered for your burguer:</h3>
      )}
      {ingredientsSelectedValues ? (
        ingredientsSelectedArray.map((ingredient) => {
          const [ingredientSelected, numberOrdered] = ingredient;
          if (numberOrdered !== 0) {
            return (
              <OrderList
                ingredientSelected={ingredientSelected}
                numberOrdered={numberOrdered}
              />
            );
          }
          return undefined;
        })
      ) : (
        <p>You ordered anything, yet.</p>
      )}
    </div>
  );
};

export default OrderIngredientsList;
