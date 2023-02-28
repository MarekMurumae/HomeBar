import { Recipe } from "./Recipe";
import { Ingredient } from "../ingredients/ingredient";
import { useState } from "react"

interface ComponentProps {
    recipe: Recipe;
  }

export const RecipeCard = ({ recipe }: ComponentProps) => {
    const [ingredients] = useState<Ingredient[]>(recipe.ingredients);

    return (
        <div className="bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
      <div className="flex flex-col items-center md:flex-row md:max-w-md">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={recipe.imageUrl}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {recipe.name}
          </h5>
          <div className="flex flex-col mb-3 font-bold text-gray-700 dark:text-gray-400">
            {ingredients.map((Ingredient) => <p>{Ingredient.name} - {Ingredient.amount} {Ingredient.measurementUnit}</p>)} 
          </div>
          <p className="mb-3 font-bold text-gray-900 dark:text-white">
            Recipe:
          </p>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            {recipe.steps}
          </p>
        </div>
      </div>
    </div>
    )
}