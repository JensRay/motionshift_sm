import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle.styles";
import Home from "./pages/Home.page";
import Layout from "./pages/Layout.page";

const App = () => {
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

  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
