import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";

export default function Main() {
  return (
    <main className="w-full lg:w-3xl bg-gray-100">
      <Navbar />
      <Outlet />
    </main>
  );
}
