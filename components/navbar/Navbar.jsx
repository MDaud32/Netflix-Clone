import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Navbar = ({ userName }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push('/');
  };
  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push('/MyList');
  };

  const handleDropdown = (e) => {
    e.preventDefault(setShow(!show));
  };

  return (
    <div className="flex w-full py-3 px-7 text-white absolute z-20 justify-center items-center">
      <div className="flex flex-row w-full justify-between ">
        <div className="flex flex-row items-center gap-20">
          <button className="cursor-pointer">
            <div className="font-bold text-4xl text-red-500">Netflix</div>
          </button>
          <ul className="flex flex-row gap-4 cursor-pointer text-xl">
            <button>
              <li onClick={handleOnClickHome}>Home</li>
            </button>
            <button>
              <li onClick={handleOnClickMyList}>My List</li>
            </button>
          </ul>
        </div>

        <div className="flex flex-col justify-end">
          <div className="">
            <button onClick={handleDropdown}>
              <p className="">{userName}</p>
            </button>
          </div>
          {show && (
            <div>
              <Link href="/login">
                <a className="px-4 py-1 rounded-md bg-black ">sign out</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
