import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import checkLoggedInStatus from "./utils/checkLoggedInStatus";
import UserContext from "./utils/UserContext";
import Spinner from "@goran1010/spinner";

function Root() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStatus() {
      try {
        const loggedInUser = await checkLoggedInStatus();
        setUser(loggedInUser);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error("Failed to fetch login status:", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    fetchStatus();
  }, []);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <UserContext value={{ user, setUser }}>
          <Outlet />
        </UserContext>
      )}
    </>
  );
}

export default Root;
