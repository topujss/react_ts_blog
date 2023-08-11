import { Link } from 'react-router-dom';

const Posts = ({ posts }) => {
  const { postData } = posts;

  console.log(postData);
  return (
    <div className="flex-[9] flex flex-wrap m-5">
      {postData?.map(({ _id, title, desc, categories, photo, createdAt }) => {
        console.log(categories[1]);
        return (
          <div className="post w-[400px] mb-10 mx-10 gap-3 flex flex-col">
            <div className="postInfo flex flex-col items-center relative">
              <div className="postCats absolute bottom-24 right-1 ">
                {categories?.map((cat, index) => {
                  return (
                    <span className="text-[16px] text-cyan-400 mr-3 font-semibold" key={index}>
                      <Link className="link" to={`/posts?cat=${cat}`}>
                        {cat}
                      </Link>
                    </span>
                  );
                })}
              </div>
              <span className="postTitle text-2xl font-black">
                <img
                  className="postImg h-[280px] object-cover rounded-md"
                  src={`https://picsum.photos/536/354`}
                  alt=""
                />
                <Link to={`/post/${_id}`} className="link my-5 block text-center">
                  {title}
                </Link>
              </span>
              <hr />
              <span className="postDate italic text-xs">{new Date(createdAt).toDateString()}</span>
            </div>
            <p className="postDesc text-xs overflow-hidden text-ellipsis leading-6">{desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
