import Sidebar from '../components/Sidbar';
import { FaRegUserCircle } from 'react-icons/fa';

export default function Settings() {
  return (
    <div className="settings flex">
      <div className="settingsWrapper flex-[9] p-5">
        <div className="settingsTitle flex items-center justify-between">
          <span className="settingsTitleUpdate text-3xl mb-5 text-rose-500">Update Your Account</span>
          <span className="settingsTitleDelete text-red-500 cursor-pointer text-xs">Delete Account</span>
        </div>
        <form className="settingsForm flex flex-col">
          <label className="mt-5 text-xl">Profile Picture</label>
          <div className="settingsPP flex items-center my-2">
            <img
              className="settingsPPImg w-20 h-20 rounded-2xl object-cover"
              src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
            <label htmlFor="fileInput">
              <FaRegUserCircle className="w-8 h-8 p-1 flex justify-center items-center ml-2 bg-[lightcoral] cursor-pointer rounded-full text-white" />
            </label>
            <input id="fileInput" type="file" className="settingsPPInput hidden" />
          </div>
          <label className="mt-5 text-xl">Username</label>
          <input
            type="text"
            className="text-xl text-gray-500 my-2 h-7 border-b-2 focus:outline-none focus:border-rose-500"
            placeholder="Safak"
            name="name"
          />
          <label className="mt-5 text-xl">Email</label>
          <input
            type="email"
            className="text-xl text-gray-500 my-2 h-7 border-b-2 focus:outline-none focus:border-rose-500"
            placeholder="safak@gmail.com"
            name="email"
          />
          <label className="mt-5 text-xl">Password</label>
          <input
            type="password"
            className="text-xl text-gray-500 my-2 h-7 border-b-2 focus:outline-none focus:border-rose-500"
            placeholder="Password"
            name="password"
          />
          <button
            className="settingsSubmitButton self-center w-36 rounded-lg bg-teal-500 text-white p-2 mt-5 cursor-pointer flex items-center justify-center"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
