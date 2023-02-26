import { Ingredient } from "../ingredients/ingredient";

export interface Recipe {
    name:string;
    imageUrl:string;
    ingredients:Ingredient[];
    steps:string
}