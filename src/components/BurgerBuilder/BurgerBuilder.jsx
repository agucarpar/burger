import React from "react";
import Burguer from "../Burguer/Burguer";
import "./burguerBuilder.css";
import TotalPriceDisplay from "./components/TotalPriceDisplay/TotalPriceDisplay";
import OrderedIngredients from "./components/Orderedingredients/OrderedIngredients";
import Buttons from "./components/Buttons/Buttons";

const BurguerBuilder = () => {
  return (
    <>
      <Buttons/>
      <TotalPriceDisplay />
      <OrderedIngredients/>
      <Burguer />
    </>
  );
};

export default BurguerBuilder;
