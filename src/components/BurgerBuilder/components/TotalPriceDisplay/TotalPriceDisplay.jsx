import React from "react";
import { useSelector, shallowEqual } from "react-redux";

const TotalPriceDisplay = () => {
  const totalPriceFromRedux = useSelector(
    (state) => state.totalPrice,
    shallowEqual
  );

  return (
    <div>
      <h3>TOTAL PRICE: {totalPriceFromRedux}</h3>
    </div>
  );
};

export default TotalPriceDisplay;
