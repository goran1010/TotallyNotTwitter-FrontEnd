import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import checkLoggedInStatus from "./utils/checkLoggedInStatus";
import UserContext from "./utils/UserContext";

function Root() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      const loggedInUser = await checkLoggedInStatus();
      setUser(loggedInUser);
      setLoading(false);
    }
    fetchStatus();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserContext value={{ user, setUser }}>
          <Outlet />
        </UserContext>
      )}
    </div>
  );
}

export default Root;
