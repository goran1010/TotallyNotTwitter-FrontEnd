import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Root() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const currentUrl =
          import.meta.env.VITE_API_URL || "http://localhost:3000";
        const response = await fetch(`${currentUrl}/status`, {
          mode: "cors",
          credentials: "include",
        });

        if (response.ok) {
          const resolve = await response.json();
          setUser(resolve);
        }
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <Outlet context={(user, setUser)}></Outlet>
    </>
  );
}
export default Root;
