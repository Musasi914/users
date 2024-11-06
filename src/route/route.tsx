import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
// import Root from "../components/pages/Root";
import Home from "../components/pages/Home";
import UserManagement from "../components/pages/UserManagement";
import Setting from "../components/pages/Setting";
import Page404 from "../components/pages/Page404";
import Login from "../components/pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "home/user_management",
        element: <UserManagement />,
      },
      {
        path: "home/setting",
        element: <Setting />,
      },
    ],
  },
]);

export default router;
