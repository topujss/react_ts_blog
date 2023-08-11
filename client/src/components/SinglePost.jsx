import { Link, useLocation } from 'react-router-dom';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function SinglePost() {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [post, setPost] = useState({});

  console.log(post.getSingle?.photo);
  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get(`http://localhost:5050/api/v1/post/${id}`);
      setPost(res.data);
    };
    getPost();
  }, [id]);

  return (
    <div className="flex-[9]">
      <div className="singlePostWrapper p-5 pr-0">
        {post.getSingle?.photo ? (
          <img
            className="singlePostImg w-full h-[300px] object-cover rounded"
            src={`http://localhost:5050/public/img/${post.getSingle?.photo}`}
            alt=""
          />
        ) : (
          <img
            className="singlePostImg w-full h-[300px] object-cover rounded"
            src="https://www.macworld.com/wp-content/uploads/2023/01/newton-dummies-primary-100617461-orig.jpg?quality=50&strip=all&w=1024"
            alt=""
          />
        )}
        <h1 className="singlePostTitle text-center m-2 text-3xl">
          {post.getSingle?.title}
          <div className="singlePostEdit float-right text-xl cursor-pointer">
            <FaEdit className="inline-block mr-2 text-teal-500" />
            <FaTrashAlt className="inline-block text-fuchsia-500" />
          </div>
        </h1>
        <div className="singlePostInfo mb-5 flex justify-between text-xs text-[#be9656]">
          <span>
            By
            <strong className="singlePostAuthor ml-1">
              <Link className="link" to={`/post?username=${post.getSingle?.username}`}>
                {post.getSingle?.username}
              </Link>
            </strong>
          </span>
          <span>{new Date(post.getSingle?.createdAt).toDateString()}</span>
        </div>
        <p className="singlePostDesc text-gray-500 text-xl first-letter:ml-5 first-letter:uppercase first-letter:font-bold first-letter:text-3xl first-letter:text-sky-500">
          {post.getSingle?.desc}
        </p>
      </div>
    </div>
  );
}
