import Post from './Post';

const Posts = () => {
  return (
    <div className="flex-[9] flex flex-wrap m-5">
      <Post
        img={`https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
      />
      <Post
        img={`https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
      />
      <Post
        img={`https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
      />
      <Post
        img={`https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`}
      />
    </div>
  );
};

export default Posts;
