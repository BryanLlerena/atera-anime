import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/Search";
import AnimeView from "./pages/AnimeView";
import PageNotFound from "./pages/PageNotFound";

const appRouter  = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: '/search-anime-manga', element: <SearchPage/> },
  { path: '/anime/:id', element: <AnimeView/> },
  { path: '*', element: <PageNotFound/> },
]);

export default <RouterProvider router={appRouter} />;
