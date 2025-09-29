export default function LogIn() {
  return (
    <main>
      <div>
        <h1>Please log in</h1>
      </div>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button type="button">Log in</button>
        </div>
      </form>
    </main>
  );
}
