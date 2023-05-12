import { 
  createBrowserRouter,
  RouterProvider,
  // HashRouter
} from "react-router-dom";
import Home from "./pages/Home";

const appRouter  = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
  },
]);

export default <RouterProvider router={appRouter} />;
