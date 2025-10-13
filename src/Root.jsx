import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import checkLoggedInStatus from "./utils/checkLoggedInStatus";

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
    <>
      <Outlet context={(user, setUser)}></Outlet>
    </>
  );
}
export default Root;
