import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="
        flex w-full justify-around p-4 bg-gray-200
        md:justify-center md:gap-8
        lg:flex-col lg:fixed lg:top-10 lg:left-3 lg:items-center lg:space-y-6 lg:w-min
      "
    >
      <Link to="/home">Home</Link>
      <Link to="/followers">Followers</Link>
      <Link to="/following">Following</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
