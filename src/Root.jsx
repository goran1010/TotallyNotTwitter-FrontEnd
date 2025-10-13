import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import checkLoggedInStatus from "./utils/checkLoggedInStatus";
import UserContext from "./utils/UserContext";

function Root() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchStatus() {
      const loggedInUser = await checkLoggedInStatus();
      setUser(loggedInUser);
    }
    fetchStatus();
  }, []);

  return (
    <UserContext value={{ user, setUser }}>
      <Outlet />
    </UserContext>
  );
}

export default Root;
