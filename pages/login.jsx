import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { magic } from '../lib/magic-client';

const Login = () => {
  const [userMsg, setUserMsg] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const router = useRouter();

  const handleEmail = (e) => {
    setUserMsg('');
    const email = e.target.value;
    setUserEmail(email);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (userEmail) {
      if (userEmail === 'theprofessor543@gmail.com') {
        // router.push('/');
        try {
          const didToken = await magic.auth.loginWithMagicLink({
            email: userEmail,
          });
          console.log(didToken);
        } catch (error) {
          console.log('there is an error', error);
        }
      } else {
        setUserMsg('Something went wrong');
      }
    } else {
      setUserMsg('Please Enter Your Email');
    }
  };

  return (
    <div
      className="bg-opacity-40"
      style={{
        backgroundImage: 'url(/static/netflixbg.jpg)',
        position: 'cover',
        opacity: '0.8',
        width: '100%',
        height: '39rem',
      }}>
      <Head>
        <title>Netflix Login</title>
      </Head>
      <div className="p-7">
        <button className="cursor-pointer">
          <div className="font-bold text-4xl text-red-500">Netflix</div>
        </button>
      </div>

      <main className="flex flex-col text-white justify-center items-center text-center gap-4 bg-black w-[22rem] h-[20rem] mx-auto mt-[3rem] bg-opacity-60">
        <h1 className="text-red-600 text-5xl mb-6">Sign In</h1>
        <input
          type="email"
          placeholder="enter your email"
          onChange={handleEmail}
          className="p-4 border-4 border-gray-500 rounded-md text-black hover:border-gray-600"
        />
        <p className="">{userMsg}</p>
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-red-600 text-white rounded-md text-2xl cursor-pointer hover:bg-red-500">
          Sign In
        </button>
      </main>
    </div>
  );
};

export default Login;
