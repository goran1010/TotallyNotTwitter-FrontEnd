import { Link } from "react-router-dom";

const currentUrl = import.meta.env.VITE_API_URL;

export default function Status() {
  async function handleSubmit(e) {
    try {
      e.preventDefault();

      const response = await fetch(`${currentUrl}/status`, {
        mode: "cors",
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
        },
      });
      const result = await response.json();
      if (!response.ok) {
        return console.log(result);
      }
      console.log(result);
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 ">
      <div className="w-full max-w-md p-6 flex flex-col gap-3">
        <h1 className="text-5xl mb-8 text-center font-bold text-gray-900">
          Please status in
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 hover:cursor-pointer active:scale-98"
          >
            Check Status
          </button>
        </form>
      </div>
    </main>
  );
}
