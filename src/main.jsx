import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/ErrorPage.jsx";
import Home from "./pages/Home.jsx";
import Shop from "./pages/Shop.jsx";
import { Provider } from "react-redux";
import store from "./redux/Store.jsx";
import Cart from "./pages/Cart.jsx";
import CheckOut from "./pages/CheckOut.jsx";
import OrderConfirmpage from "./pages/OrderConfirmpage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import LogInPage from "./pages/LogInPage.jsx";
import SearchProdPage from "./pages/SearchProdPage.jsx";
import ProductDetils from "./pages/ProductDetils.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkOut",
        element: <CheckOut />,
      },
      {
        path: "orderconfirmpage",
        element: <OrderConfirmpage />,
      },
      {
        path: "registerpage",
        element: <RegisterPage />,
      },
      {
        path: "loginform",
        element: <LogInPage />,
      },
      {
        path: "searchprodpage",
        element: <SearchProdPage />,
      },
      {
        path: "productdetils/:id",
        element: <ProductDetils />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
