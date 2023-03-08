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
    <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
      <button
        onClick={handleDelete}
        className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden"
      >
        <div className="relative pb-48 overflow-hidden">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={ingredient.imageUrl}
            alt={`Image for ingredient ${ingredient.name}`}
          />
        </div>
        <div className="p-4">
          <span className="inline-block px-2 py-1 leading-none bg-orange-200 text-orange-800 rounded-full font-semibold uppercase tracking-wide text-xs">
            Running empty
          </span>
          <h2 className="mt-2 mb-2  font-bold">{ingredient.name}</h2>
          <p className="text-sm">
            Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec
            ullamcorper nulla non metus auctor fringilla.
          </p>
          <div className="mt-3 justify-center flex items-center">
            <span className="font-bold text-md">{ingredient.amount}</span>&nbsp;
            <span className="text-sm font-semibold">
              {ingredient.measurementUnit}
            </span>
          </div>
        </div>
        <div className="p-4 border-t border-b text-xs text-gray-700">
          <span className="flex items-center mb-1">
            <i className="far fa-clock fa-fw mr-2 text-gray-900"></i> 3 Tage
          </span>
          <span className="flex items-center">
            <i className="far fa-address-card fa-fw text-gray-900 mr-2"></i>{" "}
            Ermäßigung mit Karte
          </span>
        </div>
      </button>
    </div>
  );
};
