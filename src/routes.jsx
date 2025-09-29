import Root from "./Root";
import ErrorPage from "./components/ErrorPage";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/signup", element: <SignUp /> },
      { path: "/login", element: <LogIn /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
];

export default routes;
