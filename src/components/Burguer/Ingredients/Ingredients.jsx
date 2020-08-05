import React from "react";
import "./ingredient.css";
import PropTypes from "prop-types";

const Ingredients = (props) => {
  const { type, number } = props;
  let ingredients;
  switch (type) {
    case "breadBottom":
      ingredients = <div className="breadBottom"></div>;
      break;

    case "breadTop":
      ingredients = (
        <div className="breadTop">
          <div className="seeds1"></div>
          <div className="seeds2"></div>'
        </div>
      );
      break;
    case "meat":
      ingredients = Array(number).fill(<div className="meat"></div>);

      break;

    case "cheese":
      ingredients = Array(number).fill(<div className="cheese"></div>);

      break;
    case "salad":
      ingredients = Array(number).fill(<div className="salad"></div>);
      break;
    case "bacon":
      ingredients = Array(number).fill(<div className="bacon"></div>);

      break;
    case "tomatoe":
      ingredients = Array(number).fill(<div className="tomatoe"></div>);
      break;
    default:
      ingredients = null;
      break;
  }
  return ingredients;
};

Ingredients.propTypes = {
  type: PropTypes.string.isRequired,
  number: PropTypes.number,
};
Ingredients.defaulProps = {
  number: undefined,
};

export default Ingredients;
