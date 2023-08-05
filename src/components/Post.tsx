import { Link } from 'react-router-dom';
import { PostProps } from '../types';

export default function Post({ img }: PostProps) {
  return (
    <>
      <div className="post w-[400px] mb-10 mx-10 gap-3 flex flex-col">
        <div className="postInfo flex flex-col items-center relative">
          <div className="postCats absolute bottom-24 right-1 ">
            <span className="text-[16px] text-cyan-400 mr-3 font-semibold">
              <Link className="link" to="/posts?cat=Music">
                Music
              </Link>
            </span>
            <span className="text-[16px] text-cyan-400 mr-3 font-semibold">
              <Link className="link" to="/posts?cat=Life">
                Life
              </Link>
            </span>
          </div>
          <span className="postTitle text-2xl font-black">
            <img className="postImg h-[280px] object-cover rounded-md" src={`${img}`} alt="" />
            <Link to="/post/abc" className="link my-5 block text-center">
              Lorem ipsum dolor sit amet
            </Link>
          </span>
          <hr />
          <span className="postDate italic text-xs">1 hour ago</span>
        </div>
        <p className="postDesc text-xs overflow-hidden text-ellipsis leading-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda officia architecto deserunt deleniti?
          Labore ipsum aspernatur magnam fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
          atque, exercitationem quibusdam, reiciendis odio laboriosam?
        </p>
      </div>
    </>
  );
}
