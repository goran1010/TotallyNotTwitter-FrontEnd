import Root from "./Root";
import ErrorPage from "./components/ErrorPage";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Followers from "./components/Followers";
import Following from "./components/Following";
import { Navigate } from "react-router-dom";
import IsLoggedIn from "./components/IsLoggedIn";
import IsNotLoggedIn from "./components/IsNotLoggedIn";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <IsNotLoggedIn />,
        children: [
          {
            path: "signup",
            element: <SignUp />,
          },
          {
            path: "login",
            element: <LogIn />,
          },
        ],
      },
      {
        element: <IsLoggedIn />,
        children: [
          {
            path: "/",
            element: <Main />,
            children: [
              { index: true, element: <Navigate to="home" replace /> },
              { path: "home", element: <Home /> },
              { path: "profile", element: <Profile /> },
              { path: "followers", element: <Followers /> },
              { path: "following", element: <Following /> },
            ],
          },
        ],
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
];

export default routes;
