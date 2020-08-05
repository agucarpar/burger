import React from "react";

const OrderList = (props) => {
  const { ingredientSelected, numberOrdered } = props;

  return (
    <div>
      <div key={`${ingredientSelected}`}>
        <p>
          {ingredientSelected}: <span>{numberOrdered}</span>
        </p>
      </div>
    </div>
  );
};

export default OrderList;
