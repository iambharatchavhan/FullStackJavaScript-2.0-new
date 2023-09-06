
import Header from "./Header/Header";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Contact from "./Body/Contact/Contact";
import Project from "./Body/Projects/Project";
import Resume from "./Body/Resume/Resume";

const App = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body/>,
      },
      {
        path: "/projects",
        element: <Project />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

export default appRouter;
