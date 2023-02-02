import { createBrowserRouter } from "react-router-dom";
import AddBlog from "../../COMPONENTS/AddBlog/AddBlog";
import EditBlogForm from "../../COMPONENTS/EditBlog/EditBlogForm";
import Main from "../../LAYOUT/Main/Main";
import Home from "../../PAGES/home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      { path: "/", element: <Home></Home> },
      { path: "/add-blog", element: <AddBlog></AddBlog> },
      { path: "/edit-blog", element: <EditBlogForm></EditBlogForm> },
    ],
  },
]);
export default router;
