import React, { useState } from "react";
import OrderIngredientsList from "./components/OrderIngredientsList";
import { useSelector } from "react-redux";

const OrderedIngredients = () => {
  const [showOrderList, setShowOrderList] = useState(false);

  const showingOrderHandler = () => {
    setShowOrderList(!showOrderList);
  };

  const ingredientsFromRedux = useSelector((state) => state.ingredients);
  const ingredientsSelectedArray = Object.entries(ingredientsFromRedux);
  const ingredientsSelectedValues = Object.values(ingredientsFromRedux).some(
    (value) => value !== 0
  );

  return (
    <div>
      <button onClick={showingOrderHandler}>Show Order</button>

      {showOrderList && (
        <OrderIngredientsList
          ingredientsSelectedArray={ingredientsSelectedArray}
          ingredientsSelectedValues={ingredientsSelectedValues}
        />
      )}
    </div>
  );
};

export default OrderedIngredients;
