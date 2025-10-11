import Root from "./Root";
import ErrorPage from "./components/ErrorPage";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";
import Main from "./components/Main";
import Profile from "./components/Profile";
import Followers from "./components/Followers";
import Following from "./components/Following";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <LogIn /> },
      {
        path: "/",
        element: <Main />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          { path: "home", element: <Home /> },
          { path: "profile", element: <Profile /> },
          { path: "followers", element: <Followers /> },
          { path: "following", element: <Following /> },
        ],
      },
    ],
  },
  { path: "*", element: <ErrorPage /> },
];

export default routes;
