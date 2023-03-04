import { useState } from "react";
import { CrossIcon } from "../../icons/CrossIcon";
import { AutocompleteSearch } from "../common/AutocompleteSearch";
import { Ingredient } from "./ingredient";
import { IngredientBlock } from "./IngredientBlock";
import { ingredientsDB } from "./ingredients";

interface ComponentProps {
  userIngredients: Ingredient[];
  addIngredients: (i: Ingredient[]) => void;
  closeModal: () => void;
}

const db = ingredientsDB;

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

  const onDelete = (itemToBeDeleted: Ingredient) => {
    let filteredArray = selectedIngredients.filter(
      (item) => item !== itemToBeDeleted
    );
    setSelectedIngredients(filteredArray);
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
            <div className="relative p-6 flex-auto text-slate-500 text-lg leading-relaxed">
              <p className="py-4">
                Search our database for different ingredients to add to your
                inventory
              </p>
              <AutocompleteSearch
                placeholder="Search for ingredients"
                ingredients={db}
                addIngredient={onAddIngredient}
              />
              {selectedIngredients.map((i: Ingredient) => (
                <IngredientBlock ingredient={i} deletable onDelete={onDelete} />
              ))}
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
