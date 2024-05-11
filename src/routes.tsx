import { createBrowserRouter } from "react-router-dom";
import { PageLayout } from "./components/layout/PayLayout";
import Login from "./pages/auth/Login";
import NotFound from "./pages/general/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard";
import Posts from "./pages/posts/Posts";
import PostDetail from "./pages/posts/PostDetail";
import CreatePost from "./pages/posts/CreatePost";
import { Account } from "./pages/Profile/Account";
import { Profile } from "./pages/Profile/Profile";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/posts/:id",
        element: <PostDetail />,
      },
      {
        path: "/posts/create",
        element: <CreatePost />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);
