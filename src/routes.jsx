import Root from "./Root";
import ErrorPage from "./components/ErrorPage";
import SignUp from "./components/SignUp";

const routes = [
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{ path: "/signup", element: <SignUp /> }],
  },
  { path: "*", element: <ErrorPage /> },
];

export default routes;
