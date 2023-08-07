import Post from '../components/Posts';
import Sidbar from '../components/Sidbar';

const Home = () => {
  return (
    <>
      <div id="title" className=" mt-14">
        <div className="flex flex-col items-center text-gray-500 ">
          <span className="absolute text-xl top-[18%] font-semibold">React & Node</span>
          <span className="absolute text-8xl top-[20%] uppercase">React</span>
        </div>
        <img
          className="w-full h-[450px] object-cover mt-20"
          src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
      </div>
      <div className="flex">
        <Post />
        <Sidbar />
      </div>
    </>
  );
};

export default Home;
