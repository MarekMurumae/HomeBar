import { useState } from "react";
import { Ingredient } from "./ingredient";
import { IngredientCard } from "./IngredientCard";

const defaultIngredients: Ingredient[] = [
  {
    name: "Triple sec",
    imageUrl:
      "https://resources.vino.com/data/offertaFileFile/offertaFileFile-98025.jpg",
    amount: 1,
    measurementUnit: "litres",
  },
  {
    name: "Simple syrup",
    imageUrl:
      "https://www.thespruceeats.com/thmb/aWX06OUI_zTUt_1cdh1DIxY1jVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-simple-syrup-760330-4_preview-5b0edbc8303713003737ff09.jpeg",
    amount: 2,
    measurementUnit: "litre(s)",
  },
  {
    name: "Jack Daniels",
    imageUrl:
      "https://static.whiskybase.com/storage/whiskies/1/5/863/149434-big.jpg",
    amount: 0.5,
    measurementUnit: "oz",
  },
];

export const IngredientView = () => {
  const [ingredients, setIngredients] =
    useState<Ingredient[]>(defaultIngredients);

  const onAddIngredient = () => {
    const newIngrediate = {
      name: "Beefeater Gin",
      imageUrl:
        "https://www.beefeatergin.com/wp-content/uploads/2023/01/Beefeater-London-Dry-Gin-aspect-ratio-320-540.png",
      amount: 700,
      measurementUnit: "ml",
    };
    setIngredients([...ingredients, newIngrediate]);
  };

  const onDelete = (itemToBeDeleted: Ingredient) => {
    let filteredArray = ingredients.filter((item) => item !== itemToBeDeleted);
    setIngredients(filteredArray);
  };

  return (
    <div className="flex flex-col items-center">
      <button
        type="button"
        onClick={onAddIngredient}
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
  );
};
