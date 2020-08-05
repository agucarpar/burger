import React from "react";
import './layaout.css'
import BurguerBuilder from "../BurgerBuilder/BurgerBuilder";

const Layaout = () => {
  return (
    <>
      <main className='content'>
        <BurguerBuilder/>
      </main>
    </>
  );
};

export default Layaout;
