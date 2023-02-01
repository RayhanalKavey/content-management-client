import { createBrowserRouter } from "react-router-dom";
import AddBlog from "../../COMPONENTS/AddBlog/AddBlog";
import Main from "../../LAYOUT/Main/Main";
import Home from "../../PAGES/home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      { path: "/", element: <Home></Home> },
      { path: "/add-blog", element: <AddBlog></AddBlog> },
    ],
  },
]);
export default router;
