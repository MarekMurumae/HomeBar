import { Ingredient } from "./ingredient";
import { IngredientCard } from "./IngredientCard";

const ingredients: Ingredient[] = [
  {
    name: "Triple sec",
    imageUrl:
      "https://resources.vino.com/data/offertaFileFile/offertaFileFile-98025.jpg",
    amount: 1,
    measurementUnit: "litres",
  },
  {
    name: "Simple syrup",
    imageUrl:
      "https://www.thespruceeats.com/thmb/aWX06OUI_zTUt_1cdh1DIxY1jVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-simple-syrup-760330-4_preview-5b0edbc8303713003737ff09.jpeg",
    amount: 2,
    measurementUnit: "litre(s)",
  },
  {
    name: "Jack Daniels",
    imageUrl:
      "https://static.whiskybase.com/storage/whiskies/1/5/863/149434-big.jpg",
    amount: 0.5,
    measurementUnit: "oz",
  },
];

export const IngredientView = () => {
  return (
    <>
      {ingredients.map((i: Ingredient, key: number) => (
        <IngredientCard ingredient={i} key={key} />
      ))}
    </>
  );
};
