import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home.page";
import Layout from "./pages/Layout.page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
