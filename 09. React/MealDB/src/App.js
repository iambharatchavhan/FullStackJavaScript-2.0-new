/* eslint-disable no-restricted-globals */
import Pages from "./Pages/Pages";
import Category from "./Components/Category";
import { Outlet, createBrowserRouter } from "react-router-dom";
import Cuisine from "./Components/cuisine";
import Search from "./Components/Search";
import Searched from "./Components/Searched";
import Recipe from "./Components/Recipe";
import { AnimatePresence} from "framer-motion";


function App() {
  return (
    <AnimatePresence mode="wait">
    <Search/>
     <Category />
     <Outlet/>
    </AnimatePresence>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Pages/>,
      },
      {
        path: "/cuisine/:type",
        element: <Cuisine />,
      },
      {
        path: "/searched/:search",
        element: <Searched />,
      },
      {
        path: "/recipe/:id",
        element: <Recipe />,
      },
    ]
  }
]);

export default appRouter;
