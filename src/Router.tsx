import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/Search";

const appRouter  = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
  },
  {
    path: 'search-anime-manga',
    element: <SearchPage/>
  }
]);

export default <RouterProvider router={appRouter} />;
