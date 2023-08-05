import Sidebar from '../components/Sidbar';
import SinglePost from '../components/SinglePost';

const Single = () => {
  return (
    <>
      <div className="flex">
        <SinglePost />
        <Sidebar />
      </div>
    </>
  );
};

export default Single;
