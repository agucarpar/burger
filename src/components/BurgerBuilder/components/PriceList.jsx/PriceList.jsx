import React from "react";
import "./priceList.css";
import ingredientsList from "../../../utils/const/ingredientList";

const PriceList = () => {
  return (
    <>
      <h4>Price List</h4>
      <ul className="removeBullet moveLeft">
        {ingredientsList.map((ingredient, index) => {
          return (
            <li key={`${ingredient}${index}`}>
              <p className="bold">
                {ingredient.ingredient}: <span>{ingredient.price}</span>{" "}
              </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default PriceList;
