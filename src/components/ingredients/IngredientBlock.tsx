import { CrossIcon } from "../../icons/CrossIcon";
import { Ingredient } from "./ingredient";

interface IngredientBlockProps {
  ingredient: Ingredient;
  deletable?: boolean;
  onDelete?: (i: Ingredient) => void;
}

export const IngredientBlock = ({
  ingredient,
  deletable,
  onDelete,
}: IngredientBlockProps) => {
  const handleDelete = () => {
    if (onDelete) {
      onDelete(ingredient);
    }
  };

  return (
    <div className="flex flex-row py-4 gap-4">
      <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
        <span className="font-medium text-gray-600 dark:text-gray-300">
          {ingredient.name[0]}
        </span>
      </div>
      <span className="relative inline-flex items-center justify-center  font-medium text-gray-600 dark:text-gray-300">
        {ingredient.name}
      </span>
      {deletable ? (
        <button
          onClick={handleDelete}
          className="hover:rotate-90 ease-linear transition-all duration-150 justify-self-end"
        >
          <CrossIcon />
        </button>
      ) : null}
    </div>
  );
};
