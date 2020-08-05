import React, { useReducer } from "react";



const DuplicatorBurguer = () => {
  const initialState = {
    burguers: [{ burgersNum: 0 }],
  };

  const duplicatorReducer = (state, action) => {
    switch (action.type) {
      case "increment":
        {
          return { burguers: [...state.burguers, action.payload] };
        }
      case "decrement":
        return { burguerNum: initialState.burgersNum - 1 };


      default:
          return state
    }
  };

  const addburguer = () => {
    const number = document.getElementById("number-of-burgers").value;
    const numberOfBurgers = { number };
    console.log(numberOfBurgers);
    dispatch({ type: "increment", payload: numberOfBurgers });
  };

  const [state, dispatch] = useReducer(duplicatorReducer, initialState);
  return (
    <div>
      <p>
        How many burguers do you wish?{" "}
        {state.burguers.map((burguer) => (
          <span>{burguer.burgersNum}</span>
        ))}
      </p>
      <input id="number-of-burguers"></input>
      <button onClick={() => addburguer()}>Add same burguer</button>
    </div>
  );
};

export default DuplicatorBurguer;
