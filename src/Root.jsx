import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
const VITE_URL = import.meta.VITE_API_URL;

function Root() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${VITE_URL}/status`, {
          mode: "cors",
          credentials: "include",
        });
        const resolve = await response.json();
        if (response.ok) {
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
