import React from 'react'

 const RemovingButton = (props) => {
     const {disableButtons, ingredientsFromRedux, ingredientes, ingredientObject, updateRemovingIngredientsActionCreator} = props

    return (
        <div>
            <button
            disabled={disableButtons || ingredientsFromRedux[ingredientes] === 0}
              className="capitalize less"
              onClick={() =>
                updateRemovingIngredientsActionCreator(
                  ingredientObject.ingredient, ingredientObject.price
                )
              }
            >
              -{ingredientObject.ingredient}
            </button>
        </div>
    )
}

export default RemovingButton