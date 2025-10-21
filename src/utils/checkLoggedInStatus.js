export default async function checkLoggedInStatus() {
  const currentUrl = import.meta.env.VITE_API_URL || "http://localhost:3000";
  try {
    const response = await fetch(`${currentUrl}/status`, {
      mode: "cors",
      credentials: "include",
    });
    const data = await response.json();

    if (!response.ok) {
      // eslint-disable-next-line no-console
      console.log(data);
      return null;
    }
    // eslint-disable-next-line no-console
    console.log(data);
    return data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error checking login status:", error);
    return null;
  }
}
