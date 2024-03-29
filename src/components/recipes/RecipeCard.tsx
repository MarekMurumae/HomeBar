import { Recipe } from "./Recipe";
import { Ingredient } from "../ingredients/ingredient";
import { useContext, useState } from "react";
import { IngredientsContext } from "../../context/IngredientsContext";

interface ComponentProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: ComponentProps) => {
  const [ingredients] = useState<Ingredient[]>(recipe.ingredients);

  const { checkRecipeIngredients } = useContext(IngredientsContext);

  const amountOfIngredientsExisting = () => {
    return checkRecipeIngredients(recipe) + "/" + recipe.ingredients.length;
  };

  return (
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <div className="c-card block bg-white shadow-md rounded-lg overflow-hidden">
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={recipe.imageUrl}
            alt={`Image for recipe ${recipe.name}`}
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            {amountOfIngredientsExisting()}
          </span>
          <h5 className="mt-2 mb-2  font-bold  text-gray-900">{recipe.name}</h5>
          <div className="flex flex-col mb-3 text-gray-900">
            {ingredients.map((Ingredient) => (
              <p>
                {Ingredient.name} - {Ingredient.amount}{" "}
                {Ingredient.measurementUnit}
              </p>
            ))}
          </div>
          <p className="mb-3 font-bold text-gray-900">Recipe:</p>
          <p className="mb-3 text-gray-900">{recipe.steps}</p>
        </div>
      </div>
    </div>
  );
};
