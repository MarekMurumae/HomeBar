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
    <div className="bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 ">
      <button
        type="button"
        className="flex justify-end px-4 pt-4 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto dark:hover:bg-gray-600 dark:hover:text-white"
        data-modal-hide="defaultModal"
        onClick={handleDelete}
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Delete item</span>
      </button>{" "}
      <div className="flex flex-col items-center md:flex-row md:max-w-md">
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
      </div>
    </div>
  );
};
