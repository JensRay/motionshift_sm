import { createBrowserRouter, RouterProvider } from "react-router-dom";

import FacebookAuthProvider from "./context/FacebookAuthProvider";
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
    <FacebookAuthProvider>
      <GlobalStyle />
      <RouterProvider router={router} />
    </FacebookAuthProvider>
  );
};

export default App;
