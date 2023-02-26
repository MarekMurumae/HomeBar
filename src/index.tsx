import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import { IngredientView } from "./components/ingredients/IngredientView";
import { RecipeList } from "./components/recipes/RecipeList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
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
    <RouterProvider router={router} />
  </React.StrictMode>
);
