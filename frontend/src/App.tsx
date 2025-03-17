import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Pages/HomePage";
import ProductsPage from "./Components/Pages/ProductsPage";
import Product from "./Components/Pages/ProductPage";
import UserProfilePage from "./Components/Pages/UserProfilePage";
import Header from "./Components/Header/Header";
import RequireAuth from "./utils/RequireAuth";
import OrderPage from "./Components/Pages/OrderPage";
import AdminPage from "./Components/Pages/AdminPage";
import RegisterPage from "./Components/Pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/product-details/:id", element: <Product /> },
      { path: "/products/", element: <ProductsPage /> },
      { path: "/register", element: <RegisterPage /> },
      {
        element: <RequireAuth allow="1" />,
        children: [
          { path: "/ordernow/:product_id", element: <OrderPage /> },
          { path: "/profile", element: <UserProfilePage></UserProfilePage> },
        ],
      },
      {
        element: <RequireAuth allow="2" />,

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
