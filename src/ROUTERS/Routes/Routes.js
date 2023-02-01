import { createBrowserRouter } from "react-router-dom";
import Main from "../../LAYOUT/Main/Main";
import Home from "../../PAGES/home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [{ path: "/", element: <Home></Home> }],
  },
]);
export default router;
