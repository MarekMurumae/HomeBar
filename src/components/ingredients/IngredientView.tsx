import { useState } from "react";
import { EmptyCard } from "../common/EmptyCard";
import { AddNewIngredientModal } from "./AddNewIngredientModal";
import { Ingredient } from "./ingredient";
import { IngredientCard } from "./IngredientCard";

export const IngredientView = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);

  const addIngredientsToInventory = (newIngredients: Ingredient[]) => {
    setIngredients((ingredients) => ingredients.concat(newIngredients));
  };

  const onDelete = (itemToBeDeleted: Ingredient) => {
    let filteredArray = ingredients.filter((item) => item !== itemToBeDeleted);
    setIngredients(filteredArray);
  };

  const handleModalOpen = () => {
    setShowAddModal(true);
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          {ingredients.length == 0 ? (
            <EmptyCard
              title="Your inventory seems to be empty!"
              body="Click the '+' button below to start adding ingredients to your inventory."
              handleClick={handleModalOpen}
            />
          ) : (
            <EmptyCard handleClick={handleModalOpen} />
          )}
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
