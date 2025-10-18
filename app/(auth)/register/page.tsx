const RegisterPage = () => {
  return (
    <div>
      <h1>Register</h1>
      <form>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
