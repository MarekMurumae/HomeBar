import { useState } from "react";
import { Recipe } from "./Recipe";
import { RecipeCard } from "./RecipeCard"


export interface prop {
    recipe:Recipe;
}

const defaultRecipes: Recipe[] = [
{
    name:"Wake up 'n a ditch",
    imageUrl:"https://i.pinimg.com/736x/d2/58/bd/d258bd014a2a73865a8faf2372add324.jpg",
    ingredients: [
    {
        name: "Jack Daniels",
        imageUrl:
            "https://static.whiskybase.com/storage/whiskies/1/5/863/149434-big.jpg",
        amount: 1,
        measurementUnit: "litre",
        },
    {
        name: "Triple sec",
        imageUrl:"https://resources.vino.com/data/offertaFileFile/offertaFileFile-98025.jpg",
        amount: 1,
        measurementUnit: "litre",
      },
    {
        name: "Simple syrup",
        imageUrl:
          "https://www.thespruceeats.com/thmb/aWX06OUI_zTUt_1cdh1DIxY1jVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-simple-syrup-760330-4_preview-5b0edbc8303713003737ff09.jpeg",
        amount: 20,
        measurementUnit: "millilitre(s)",
      },
    ],
    steps:"1. place 2. holder 3. text"
},
{
    name:"Sweet shot",
    imageUrl:"https://www.thedailymeal.com/img/gallery/jack-daniels-is-the-most-recommended-shot-by-bartenders-according-to-survey/dreamstime_m_55945218.jpg",
    ingredients: [
    {
        name: "Jack Daniels",
        imageUrl:
          "https://static.whiskybase.com/storage/whiskies/1/5/863/149434-big.jpg",
        amount: 20,
        measurementUnit: "millilitres",
      },
    {
        name: "Simple syrup",
        imageUrl:
          "https://www.thespruceeats.com/thmb/aWX06OUI_zTUt_1cdh1DIxY1jVY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-make-simple-syrup-760330-4_preview-5b0edbc8303713003737ff09.jpeg",
        amount: 10,
        measurementUnit: "millilitres",
      },
    ],
    steps:"1. fill the bottom of the glass with syrup 2. pour Jack on top"
},
{
    name:"Plain Jack",
    imageUrl:"https://static.whiskybase.com/storage/whiskies/1/5/863/149434-big.jpg",
    ingredients: [
    {
        name: "Jack Daniels",
        imageUrl:
            "https://static.whiskybase.com/storage/whiskies/1/5/863/149434-big.jpg",
        amount: 2,
        measurementUnit: "litres",
        },
    ],
    steps:"1. Open Bottle 2. Chug"
},
]

export const RecipeList = () => {
    const [recipes] =
        useState<Recipe[]>(defaultRecipes);
    
    return (
        <div className="flex flex-col items-center">
            <div className="flex flex-wrap gap-4">
            {recipes.map((i: Recipe) => (
                    <RecipeCard recipe={i} />
                ))}
            </div>
        </div>
    );
};