import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { GlobalStyle } from "./GlobalStyle.styles";
import Home from "./pages/Home.page";
import Layout from "./pages/Layout.page";
import YourLikes from "./pages/YourLikes.page";

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
        {
          path: "/your_likes",
          element: <YourLikes />,
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
