import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to={"/home"}>Home</Link>
      <Link to={"/followers"}>Followers</Link>
      <Link to={"/following"}>Following</Link>
      <Link to={"/profile"}>Profile</Link>
    </nav>
  );
}
