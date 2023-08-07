import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="login flex flex-col items-center justify-center bg-cover">
      <span className="loginTitle text-5xl font-semibold">Login</span>
      <form className="loginForm mt-5 flex flex-col">
        <label className="my-2 text-blue-700 font-medium" htmlFor="e">
          Email
        </label>
        <input
          id="e"
          className="loginInput p-2  rounded-lg focus:outline-none bg-slate-50 "
          type="text"
          placeholder="Enter email. . ."
        />
        <label className="my-2 text-blue-700 font-medium" htmlFor="p">
          Password
        </label>
        <input
          id="p"
          className="loginInput p-2 bg-slate-50 rounded-lg focus:outline-none"
          type="password"
          placeholder="Enter password..."
        />
        <button className="loginButton mt-5 cursor-pointer bg-rose-500 text-white p-2 rounded-lg text-center">
          Login
        </button>
      </form>
      <Link
        to={'/register'}
        className="loginRegisterButton absolute top-14 right-5 bg-teal-500 cursor-pointer p-2 text-white rounded-lg"
      >
        Register
      </Link>
    </div>
  );
}
