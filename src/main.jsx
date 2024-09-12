import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Shop } from "./Routes/Shop.jsx";
import { ShopTypes } from "./Routes/ShopTypes.jsx";
import { Women } from "./Routes/Women.jsx";
import { Kid } from "./Routes/Kid.jsx";
import { Product } from "./Routes/Product.jsx";
import shoppingStore from "./Store/index.js";
import { Provider } from "react-redux";
import { CartDisplay } from "./Routes/CartDisplay.jsx";
import { Login } from "./Routes/Login.jsx";
import { SignIn } from "./Routes/SignIn.jsx";
// const banner_mens = "/Assets/banner_mens.png";
// const banner_women = "/Assets/banner_women.png";
// const banner_kid = "/Assets/banner_kids.png";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/men",
        element: <ShopTypes />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/kid",
        element: <Kid />,
      },
      {
        path: "/product",
        element: <Product />,
      },
      {
        path: "/cartdisplay",
        element: <CartDisplay />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={shoppingStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
