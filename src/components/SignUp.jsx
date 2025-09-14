export default function SignUp() {
  return (
    <main>
      <div>
        <h1>Create your account</h1>
      </div>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <label htmlFor="email">Username</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Username</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="confirm-password">Username</label>
          <input
            type="password"
            name="confirm-password"
            id="confirm-password"
          />
        </div>
      </form>
    </main>
  );
}
