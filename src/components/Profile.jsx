import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useEffect, useRef, useState } from "react";
const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState(user.userInfo?.firstName || "");
  const [lastName, setLastName] = useState(user.userInfo?.lastName || "");

  const [preview, setPreview] = useState(null);

  async function handleLogOut() {
    const response = await fetch(`${VITE_URL}/auth/log-out`, {
      mode: "cors",
      method: "GET",
      credentials: "include",
    });
    await response.json();
    if (response.ok) {
      setUser(null);
    }
  }

  useEffect(() => {
    async function getProfileImage() {
      const response = await fetch(
        `${VITE_URL}/auth/profile-image?userId=${user.id}`,
        {
          method: "GET",
          mode: "cors",
        }
      );
      const profileImage = await response.json();

      setPreview(profileImage);
    }
    if (user?.id) {
      getProfileImage();
    }
  }, [user?.id]);

  function handleImageChange(e) {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  }

  const image = useRef(null);

  function handleFirstName(e) {
    setFirstName(e.target.value);
  }
  function handleLastName(e) {
    setLastName(e.target.value);
  }

  async function handleForm(e) {
    e.preventDefault();

    const form = new FormData();
    form.append("userId", user.id);
    form.append("firstName", firstName);
    form.append("lastName", lastName);
    form.append("image", image.current.files[0]);

    const response = await fetch(`${VITE_URL}/auth/update-profile`, {
      method: "PUT",
      mode: "cors",
      credentials: "include",
      body: form,
    });
    const result = await response.json();
    if (response.ok) {
      setUser(result);
    }
  }

  return (
    <div>
      <header>
        <img src={preview} alt="Profile image" />
      </header>
      <form onSubmit={handleForm} encType="multipart/form-data">
        <div>
          <label htmlFor="upload-image">Upload image: </label>
          <input
            type="file"
            name="upload-image"
            id="upload-image"
            ref={image}
            onChange={handleImageChange}
          />
        </div>
        <div>
          <label htmlFor="first-name">First name: </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            value={firstName}
            onChange={handleFirstName}
          />
        </div>
        <div>
          <label htmlFor="last-name">Last name: </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            value={lastName}
            onChange={handleLastName}
          />
        </div>
        <div>
          <button>Update Profile</button>
        </div>
      </form>
      <div>
        <button onClick={handleLogOut}>Log out</button>
      </div>
    </div>
  );
}
