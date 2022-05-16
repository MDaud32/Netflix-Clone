import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = ({ userName }) => {
  const router = useRouter();

  const handleOnClickHome = (e) => {
    e.preventDefault();
    router.push('/');
  };
  const handleOnClickMyList = (e) => {
    e.preventDefault();
    router.push('/MyList');
  };
  return (
    <div className="flex w-full py-3 px-7 text-white absolute z-20 justify-center items-center">
      <div className="flex flex-row w-full justify-between ">
        <div className="flex flex-row items-center gap-20">
          <button className="cursor-pointer">
            <div className="font-bold text-2xl text-red-400">Netflix</div>
          </button>
          <ul className="flex flex-row gap-4 cursor-pointer">
            <button>
              <li onClick={handleOnClickHome}>home</li>
            </button>
            <button>
              <li onClick={handleOnClickMyList}>my list</li>
            </button>
          </ul>
        </div>

        <div className="flex flex-col justify-end">
          <div className="">
            <button>
              <p className="">{userName}</p>
            </button>
          </div>
          <div>
            <Link href="/login">
              <a className="px-4 py-1 rounded-md bg-black ">sign out</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
