import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";

export default function IsLoggedIn() {
  const { user, setUser } = useContext(UserContext);
  if (user) {
    return <Navigate to="/home" replace />;
  }
  return <Outlet context={{ setUser }} />;
}
