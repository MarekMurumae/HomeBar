import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import { IngredientView } from "./components/ingredients/IngredientView";
import { RecipeList } from "./components/recipes/RecipeList";
import { IngredientsContext, IngredientsContextProvider } from "./context/IngredientsContext";

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <IngredientView />,
      },
      {
        path: "/homeBar",
        element: <IngredientView />,
      },
      {
        path: "/details/:ingredient",
        element: <IngredientView />,
      },
      {
        path: "/recipes",
        element: <RecipeList />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IngredientsContextProvider>
      <RouterProvider router={router} />
    </IngredientsContextProvider>
  </React.StrictMode>
);
