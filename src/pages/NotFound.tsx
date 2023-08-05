import React from 'react';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center flex-col h-screen">
      <div className="gif flex justify-center">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="content text-center mx-12 gap-5 flex flex-col">
        <h1 className="main-heading text-4xl font-bold mt-5">This page is gone.</h1>
        <p className="text-2xl px-3">...maybe the page you're looking for is not found or never existed.</p>
        <Link to="/">
          <button className="p-4 rounded-lg bg-blue-600 text-white text-xl">
            <FaHome className="inline-block" /> Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
