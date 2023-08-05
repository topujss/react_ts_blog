import { FaPlus } from 'react-icons/fa';

export default function Write() {
  return (
    <div className="write pt-12">
      <img
        className="writeImg ml-[150px] w-[70vw] h-[250px] object-cover rounded-lg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <form className="writeForm relative">
        <div className="writeFormGroup ml-[150px] flex items-center">
          <label htmlFor="fileInput">
            <FaPlus className="w-6 h-6 text-xl border rounded-full text-gray-500 flex justify-center items-center cursor-pointer mr-5" />
          </label>
          <input id="fileInput" type="file" style={{ display: 'none' }} />
          <input
            className="writeInput text-3xl p-5 focus:outline-none w-[70vw] placeholder:text-green-600 border my-5"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup ml-[150px] flex items-center">
          <textarea
            className="writeInput text-xl p-5 focus:outline-none w-[70vw] placeholder:text-green-600  writeText h-[100vh] border"
            placeholder="Tell your story..."
            autoFocus={true}
          />
        </div>
        <button
          className="writeSubmit absolute top-5 right-12 text-slate-950 bg-teal-500 p-2 rounded-lg text-xs cursor-pointer flex items-center"
          type="submit"
        >
          Publish
        </button>
      </form>
    </div>
  );
}
