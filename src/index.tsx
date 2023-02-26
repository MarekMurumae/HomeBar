import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import { HelloWorld } from "./HelloWorld";
import Root from "./routes/Root";
import { IngredientView } from "./components/ingredients/IngredientView";

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
        element: <HelloWorld name="Siim" />,
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
