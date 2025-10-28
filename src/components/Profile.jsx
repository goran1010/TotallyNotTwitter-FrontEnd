import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useEffect, useRef, useState } from "react";
const VITE_URL = import.meta.env.VITE_URL || "http://localhost:3000";

export default function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [preview, setPreview] = useState(null);

  async function handleLogOut() {
    try {
      const response = await fetch(`${VITE_URL}/status/logout`, {
        mode: "cors",
        method: "POST",
        credentials: "include",
      });
      await response.json();
      if (response.ok) {
        setUser(null);
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
  }

  useEffect(() => {
    async function getProfile() {
      try {
        const response = await fetch(
          `${VITE_URL}/api/profile?userId=${user.id}`,
          {
            method: "GET",
            mode: "cors",
          }
        );
        const profile = await response.json();
        if (response.ok) {
          console.log(profile);
          setPreview(profile.avatar || null);
          setFirstName(profile.firstName || "");
          setLastName(profile.lastName || "");
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }
    if (user?.id) {
      getProfile();
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6 gap-10">
      <header className="mb-6 flex flex-col items-center">
        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-indigo-500 shadow-md">
          <img
            src={preview || "/default-avatar.png"}
            alt={preview ? "Profile image" : "No profile image available"}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="mt-4 text-2xl font-semibold text-gray-800">
          {firstName || lastName ? `${firstName} ${lastName}` : "Your Profile"}
        </h1>
      </header>

      <form
        onSubmit={handleForm}
        encType="multipart/form-data"
        className="flex flex-col bg-white p-6 rounded-xl shadow-lg w-full max-w-md space-y-4 gap-2"
      >
        <div>
          <label
            htmlFor="upload-image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Upload image
          </label>
          <input
            type="file"
            id="upload-image"
            name="upload-image"
            ref={image}
            onChange={handleImageChange}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="first-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            First name
          </label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            value={firstName}
            onChange={handleFirstName}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="last-name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Last name
          </label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            value={lastName}
            onChange={handleLastName}
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 cursor-pointer"
          >
            Update Profile
          </button>
        </div>
      </form>

      <div className="mt-6">
        <button
          onClick={handleLogOut}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600  cursor-pointer"
        >
          Log out
        </button>
      </div>
    </div>
  );
}
