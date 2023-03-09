import { useState } from "react";
import { Recipe } from "./Recipe";
import { RecipeCard } from "./RecipeCard";
import { recipeDB } from "./Recipes"

export interface prop {
  recipe: Recipe;
}

export const RecipeList = () => {
  const [recipes] = useState<Recipe[]>(recipeDB);

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap -mx-4">
        {recipes.map((i: Recipe) => (
          <RecipeCard recipe={i} />
        ))}
      </div>
    </div>
  );
};
