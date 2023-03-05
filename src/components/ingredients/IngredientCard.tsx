import { Ingredient } from "./ingredient";

interface ComponentProps {
  ingredient: Ingredient;
  onDelete: (i: Ingredient) => void;
}

export const IngredientCard = ({ ingredient, onDelete }: ComponentProps) => {
  const handleDelete = () => {
    onDelete(ingredient);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={ingredient.imageUrl}
          alt={`Cocktail ingredient: ${ingredient.name}`}
        />
        <div className="flex flex-col justify-start p-6">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {ingredient.name}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            This is a description of that ingredient. I will replace this text
            with something better. For now, it will act as a placeholder text.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-300">
            {ingredient.amount}/{ingredient.measurementUnit}
          </p>
        </div>
      </div>
    </div>
  );
};
