import Link from 'next/link';
import React from 'react';

const Navbar = ({ userName }) => {
  return (
    <div className="flex w-full py-3 px-7 text-white absolute z-10 justify-center items-center">
      <div className="flex flex-row w-full justify-between ">
        <div className="flex flex-row items-center gap-20">
          <button>
            <a>
              <div className="font-bold text-2xl text-red-400">Netflix</div>
            </a>
          </button>
          <ul className="flex flex-row gap-4">
            <li>home</li>
            <li>my list</li>
          </ul>
        </div>

        <div className="flex flex-col justify-end">
          <div className="">
            <button>
              <p className="">{userName}</p>
            </button>
          </div>
          <div>
            <Link href="/">
              <a className="px-4 py-1 rounded-md bg-black ">sign out</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
