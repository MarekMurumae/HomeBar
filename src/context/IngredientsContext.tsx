import { createContext, useState } from "react";
import { Ingredient } from "../components/ingredients/ingredient";
import { Recipe } from "../components/recipes/Recipe";

export interface IngredientsContextValue {
  ingredients: Ingredient[];
  addIngredientsToInventory: (newIngredients: Ingredient[]) => void;
  onDelete: (itemToBeDeleted: Ingredient) => void;
  checkRecipeIngredients: (recipe: Recipe) => number;
}

const IngredientsContext = createContext<IngredientsContextValue>({
  ingredients: [],
  addIngredientsToInventory: () => {},
  onDelete: () => {},
  checkRecipeIngredients: () => 0,
});

const IngredientsContextProvider = ({ children }: any) => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);

  const addIngredientsToInventory = (newIngredients: Ingredient[]) => {
    setIngredients((ingredients) => ingredients.concat(newIngredients));
  };

  const onDelete = (itemToBeDeleted: Ingredient) => {
    const filteredArray = ingredients.filter(
      (item) => item !== itemToBeDeleted
    );
    setIngredients(filteredArray);
  };

  const checkRecipeIngredients = (recipe: Recipe): number => {
    const namesNeeded = recipe.ingredients.map((ingredient) => ingredient.name);
    const namesExisting = ingredients.map((ingredient) => ingredient.name);
    return namesNeeded.filter((name: string) => namesExisting.includes(name))
      .length;
  };

  const ingredientsContextValue: IngredientsContextValue = {
    ingredients,
    addIngredientsToInventory,
    onDelete,
    checkRecipeIngredients,
  };

  return (
    <IngredientsContext.Provider value={ingredientsContextValue}>
      {children}
    </IngredientsContext.Provider>
  );
};

export { IngredientsContext, IngredientsContextProvider };
