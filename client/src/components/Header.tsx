import { FaSquareTwitter, FaSquareFacebook, FaSquareInstagram, FaSquarePinterest } from 'react-icons/fa6';
import { GoSearch } from 'react-icons/go';
import { NavLink, Link } from 'react-router-dom';
import { MenuItem, SocialItem } from '../types';

const socialItems: SocialItem[] = [
  {
    link: '/',
    icon: <FaSquareFacebook />,
  },
  {
    link: '/',
    icon: <FaSquareInstagram />,
  },
  {
    link: '/',
    icon: <FaSquarePinterest />,
  },
  {
    link: '/',
    icon: <FaSquareTwitter />,
  },
];

const menuItems: MenuItem[] = [
  {
    link: '/',
    name: 'home',
  },
  {
    link: '/about',
    name: 'about',
  },
  {
    link: '/contact',
    name: 'contact',
  },
  {
    link: '/write',
    name: 'write',
  },
];

const Header = () => {
  const user = false;
  return (
    <>
      <header className="w-full h-[50px] bg-blue-400 sticky top-0 flex  items-center z-50">
        <div className="basis-1/4 flex items-center justify-center gap-3">
          {socialItems.map((item) => {
            return (
              <Link className="text-green-800 text-2xl" to={item.link}>
                {item.icon}
              </Link>
            );
          })}
        </div>
        <nav className="basis-1/2">
          <ul className="flex justify-center gap-4 capitalize">
            {menuItems.map(({ link, name }, i) => {
              return (
                <li key={i}>
                  <NavLink className="text-xl hover:text-gray-500 text-amber-700" to={`${link}`}>
                    {name}
                  </NavLink>
                </li>
              );
            })}
            {user && (
              <li>
                <NavLink className="text-xl hover:text-gray-500 text-amber-700" to={`/login`}>
                  Logout
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <div className="basis-1/4 flex items-center justify-center gap-4 object-cover">
          {user ? (
            <Link to={'/setting'}>
              <img
                className="w-10 h-10 rounded-full object-cover"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg"
                alt=""
              />
            </Link>
          ) : (
            <>
              <Link className="text-xl hover:text-gray-500 text-amber-700" to={'/login'}>
                Login
              </Link>
              <Link className="text-xl hover:text-gray-500 text-amber-700 mr-9" to={'/register'}>
                Register
              </Link>
            </>
          )}
          <GoSearch className="text-xl text-gray-300 cursor-pointer" />
        </div>
      </header>
    </>
  );
};

export default Header;
