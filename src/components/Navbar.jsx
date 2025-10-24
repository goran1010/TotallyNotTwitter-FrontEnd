import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav
      className="
        flex w-full justify-around p-4 bg-gray-200
        md:justify-center md:gap-8
        lg:flex-col lg:fixed lg:top-1/2 lg:left-0 lg:translate-y-[-50%] lg:items-center lg:space-y-6 lg:w-min
      "
    >
      <Link to="/home">Home</Link>
      <Link to="/followers">Followers</Link>
      <Link to="/following">Following</Link>
      <Link to="/profile">Profile</Link>
    </nav>
  );
}
