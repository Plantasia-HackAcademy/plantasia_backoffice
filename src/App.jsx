import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import { Main } from "./pages/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard title="Dashboard" />,
        },
        {
          path: "products",
          element: <Dashboard title="Products" />,
        },
        {
          path: "users",
          element: <Dashboard title="Users" />,
        },
        {
          path: "orders",
          element: <Dashboard title="Orders" />,
        },
        {
          path: "/",
          element: <Dashboard title="Dashboard" />, // Ruta por defecto
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
