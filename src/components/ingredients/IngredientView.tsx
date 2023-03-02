import { useState } from "react";
import { AddNewIngredientModal } from "./AddNewIngredientModal";
import { Ingredient } from "./ingredient";
import { IngredientCard } from "./IngredientCard";

export const IngredientView = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const addIngredientsToInventory = (newIngredients: Ingredient[]) => {
    setIngredients((ingredients) => ingredients.concat(newIngredients));
    //setIngredients([...ingredients, i]);
  };

  const onDelete = (itemToBeDeleted: Ingredient) => {
    let filteredArray = ingredients.filter((item) => item !== itemToBeDeleted);
    setIngredients(filteredArray);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <button
          type="button"
          onClick={() => setShowAddModal(true)}
          className="max-w-xs text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add
        </button>
        <div className="flex flex-wrap gap-4">
          {ingredients.map((i: Ingredient, key: number) => (
            <IngredientCard ingredient={i} key={key} onDelete={onDelete} />
          ))}
        </div>
      </div>

      {showAddModal ? (
        <AddNewIngredientModal
          userIngredients={ingredients}
          addIngredients={addIngredientsToInventory}
          closeModal={() => setShowAddModal(false)}
        />
      ) : null}
    </>
  );
};
