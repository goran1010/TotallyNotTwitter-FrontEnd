import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Main() {
  return (
    <main>
      <Navbar />
      <Outlet />
    </main>
  );
}
