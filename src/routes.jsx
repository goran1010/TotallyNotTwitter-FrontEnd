import Root from "./Root";
import ErrorPage from "./components/ErrorPage";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LogIn /> },
      { default: true, path: "/", element: <Home /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
];

export default routes;
