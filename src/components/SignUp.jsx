import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const currentUrl = import.meta.env.VITE_API_URL;

export default function SignUp() {
  const [username, setUsername] = useState("");
  function handleUsername(e) {
    setUsername(e.target.value);
  }
  const [email, setEmail] = useState("");
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  const [password, setPassword] = useState("");
  function handlePassword(e) {
    setPassword(e.target.value);
  }
  const [confirmPassword, setConfirmPassword] = useState("");
  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  const navigator = useNavigate();
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("confirm-password", confirmPassword);

      const response = await fetch(`${currentUrl}/signup`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
          confirmPassword,
        }),
      });
      const result = await response.json();
      if (!response.ok) {
        return console.log(result);
      }
      navigator("/login");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 ">
      <div className="w-full max-w-md p-6 flex flex-col gap-3">
        <div>
          <h1 className="text-5xl mb-8 text-center font-bold text-gray-900">
            Create your account
          </h1>
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Username
            </label>
            <input
              value={username}
              onChange={handleUsername}
              type="text"
              name="username"
              id="username"
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              value={email}
              onChange={handleEmail}
              type="email"
              name="email"
              id="email"
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              value={password}
              onChange={handlePassword}
              type="password"
              name="password"
              id="password"
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <label
              htmlFor="confirm-password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              value={confirmPassword}
              onChange={handleConfirmPassword}
              type="password"
              name="confirm-password"
              id="confirm-password"
              className="block w-full border border-gray-300 rounded-md p-2"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer active:scale-98"
            >
              Create
            </button>
          </div>
        </form>
        <div>
          <p className="text-center">
            Already have an account ? Go back to the{" "}
            <Link
              className="text-blue-600 hover:underline font-bold"
              to={"/login"}
            >
              Log In
            </Link>{" "}
            page.
          </p>
        </div>
      </div>
    </main>
  );
}
