import { Ingredient } from "./ingredient";

interface ComponentProps {
  ingredient: Ingredient;
}

export const IngredientCard = ({ ingredient }: ComponentProps) => {
  return (
    <div className="p-4">
      <a
        href="#"
        className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={ingredient.imageUrl}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {ingredient.name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            This is a description of that ingredient. I will replace this text
            with something better. For now, it will act as a placeholder text.
          </p>
          <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
            {ingredient.amount} / {ingredient.measurementUnit}
          </p>
        </div>
      </a>
    </div>
  );
};
