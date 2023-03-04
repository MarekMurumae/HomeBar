import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { Ingredient } from "../ingredients/ingredient";
import { IngredientBlock } from "../ingredients/IngredientBlock";

interface ComponentProps {
  ingredients: Ingredient[];
  placeholder: string;
  addIngredient: (i: Ingredient) => void;
}

export const AutocompleteSearch = ({
  ingredients,
  addIngredient,
}: ComponentProps) => {
  const formatResult = (i: Ingredient) => {
    return <IngredientBlock ingredient={i} />;
  };

  const handleOnSelect = (i: Ingredient) => {
    // the item selected
    addIngredient(i);
  };

  return (
    <ReactSearchAutocomplete
      items={ingredients}
      formatResult={formatResult}
      onSelect={handleOnSelect}
    />
  );
};
