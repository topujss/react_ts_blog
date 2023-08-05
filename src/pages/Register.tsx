import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className="register flex flex-col items-center justify-center bg-cover">
      <span className="registerTitle text-5xl font-semibold">Register</span>
      <form className="registerForm mt-5 flex flex-col">
        <label className="my-2">Username</label>
        <input
          className="registerInput p-2 bg-slate-50 rounded-lg focus:outline-none "
          type="text"
          placeholder="Enter your username..."
        />
        <label className="my-2">Email</label>
        <input
          className="registerInput p-2 bg-slate-50 rounded-lg focus:outline-none"
          type="text"
          placeholder="Enter your email..."
        />
        <label className="my-2">Password</label>
        <input
          className="registerInput p-2 bg-slate-50 rounded-lg focus:outline-none"
          type="password"
          placeholder="Enter your password..."
        />
        <button className="registerButton mt-5 cursor-pointer bg-rose-500 text-white p-2 rounded-lg text-center">
          Register
        </button>
      </form>
      <Link
        to={'/login'}
        className="loginRegisterButton absolute top-14 right-5 bg-teal-500 cursor-pointer p-2 text-white rounded-lg"
      >
        Login
      </Link>
    </div>
  );
}
