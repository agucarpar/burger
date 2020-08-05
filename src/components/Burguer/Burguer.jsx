import React from "react";
import "./burguer.css";
import Ingredients from "./Ingredients/Ingredients";
import { useSelector } from "react-redux";

const Burguer = () => {
  const ingredientSelected = useSelector((state) => state.ingredients);
  const ingredientToArray = Object.entries(ingredientSelected);

  return (
    <div className="burguer">
      <Ingredients type="breadTop" />
      {ingredientToArray.length > 0 &&
        ingredientToArray.map((ingredient, index) => {
          return (
            <Ingredients
              key={`${ingredient}${index}`}
              type={ingredient[0]}
              number={ingredient[1]}
            />
          );
        })}
      <Ingredients type="breadBottom" />
    </div>
  );
};

export default Burguer;
