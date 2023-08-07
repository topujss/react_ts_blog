import { Link } from 'react-router-dom';
import { MenuItem, SocialItem } from '../types';
import { FaFacebookSquare, FaInstagramSquare, FaPinterestSquare, FaTwitterSquare } from 'react-icons/fa';

const sidebarItem: MenuItem[] = [
  { name: 'Life' },
  { name: 'Music' },
  { name: 'Sport' },
  { name: 'Style' },
  { name: 'Tech' },
  { name: 'Cinema' },
];

const socialItems: SocialItem[] = [
  { link: '/', icon: <FaFacebookSquare /> },
  { link: '/', icon: <FaInstagramSquare /> },
  { link: '/', icon: <FaPinterestSquare /> },
  { link: '/', icon: <FaTwitterSquare /> },
];

export default function Sidebar() {
  return (
    <div className="flex-three h-fit m-5 pb-7 bg-slate-500 rounded-lg flex flex-col items-center">
      <div className="flex flex-col items-center">
        <span className="m-2 p-1 w-4/5 border-y border-slate-400 text-center text-xs text-slate-200 font-extrabold">
          ABOUT ME
        </span>
        <img
          className="mt-4 w-[250px] h-[250px] object-cover rounded-md"
          src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p className="p-8">
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit amet ex esse.Sunt eu ut nostrud id
          quis proident.
        </p>
      </div>
      <nav className="flex flex-col items-center">
        <span className="m-2 p-1 w-4/5 border-y border-slate-400 text-center text-xs text-slate-200 font-extrabold">
          CATEGORIES
        </span>
        <ul className="mb-8">
          {sidebarItem.map(({ name }, i) => (
            <li className="inline-block w-1/2 mt-4" key={i}>
              <Link className="link" to={`/posts?cat=${name}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex flex-col items-center">
        <span className="m-2 p-1 border-y border-slate-400 text-center text-xs text-slate-200 font-extrabold">
          FOLLOW US
        </span>
        <div className="mt-4 w-[250px] flex justify-center items-center gap-2">
          {socialItems.map((item, i) => {
            return (
              <Link className="text-xl text-green-500" to={item.link} key={i}>
                {item.icon}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
