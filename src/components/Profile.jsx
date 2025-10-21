import { useContext } from "react";
import UserContext from "../utils/UserContext";

export default function Profile() {
  const { user } = useContext(UserContext);

  return <div>welcome {user.username}</div>;
}
