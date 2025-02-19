import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/HomePage";
import ProductsPage from "./Components/Pages/ProductsPage";
import Product from "./Components/Pages/ProductPage";
import LoginPage from "./Components/Pages/LoginPage";
import Header from "./Components/Header/Header";
import RequireAuth from "./utils/RequireAuth";
import OrderPage from "./Components/Pages/OrderPage";
import AdminPage from "./Components/Pages/AdminPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product-details/:id", element: <Product /> },
      { path: "/products/:mode", element: <ProductsPage /> },
      { path: "/login", element: <LoginPage /> },
      {
        element: <RequireAuth allow="user" />,
        children: [{ path: "/ordernow", element: <OrderPage /> }],
      },
      {
        element: <RequireAuth allow="admin" />,
        children: [{ path: "/admin", element: <AdminPage /> }],
      },
      { path: "*", element: <h1>Page Not Available</h1> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
