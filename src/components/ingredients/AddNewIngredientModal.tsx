import { useState } from "react";
import { AddIcon } from "../../icons/AddIcon";
import { CrossIcon } from "../../icons/CrossIcon";
import { SearchTextField } from "../common/SearchTextField";
import { Ingredient } from "./ingredient";
import { ingredientsDB } from "./ingredients";

interface ComponentProps {
  userIngredients: Ingredient[];
  addIngredients: (i: Ingredient[]) => void;
  closeModal: () => void;
}

const db = ingredientsDB;
console.log(db);

export const AddNewIngredientModal = ({
  userIngredients,
  addIngredients,
  closeModal,
}: ComponentProps) => {
  const [selectedIngredients, setSelectedIngredients] = useState<Ingredient[]>(
    []
  );
  const onAddIngredient = (i: Ingredient) => {
    setSelectedIngredients((selectedIngredients) =>
      selectedIngredients.concat(i)
    );
  };

  const onSave = () => {
    addIngredients(selectedIngredients);
    closeModal();
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <button
                className="p-1 ml-auto border-0 opacity-5 float-right"
                onClick={closeModal}
              >
                <span>
                  <CrossIcon />
                </span>
              </button>
            </div>
            {/*body*/}
            <div className="relative p-6 flex-auto">
              <>
                <div className="my-4 text-slate-500 text-lg leading-relaxed">
                  <SearchTextField placeholder="Search for ingredients" />
                  Search our database for different ingredients to add to your
                  inventory
                </div>
                <ul>
                  {db.map((i, key) => (
                    <li>
                      <IngredientBlock
                        ingredient={i}
                        onAddIngredient={onAddIngredient}
                        key={key}
                      />
                    </li>
                  ))}
                </ul>
              </>
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={closeModal}
              >
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={onSave}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

interface IngredientBlockProps {
  ingredient: Ingredient;
  onAddIngredient: (i: Ingredient) => void;
}

const IngredientBlock = ({
  ingredient,
  onAddIngredient,
}: IngredientBlockProps) => {
  const handleAdd = () => {
    onAddIngredient(ingredient);
  };

  return (
    <div className="flex flex-row justify-between py-4">
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {ingredient.name[0]}
        </span>
      </div>
      <p>{ingredient.name}</p>
      <button onClick={handleAdd} className="">
        <AddIcon />
      </button>
    </div>
  );
};
