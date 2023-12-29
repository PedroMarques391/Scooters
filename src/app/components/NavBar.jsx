'use client';

import Link from 'next/link';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function NavBar() {
  const [navigation, setNavigation] = useState(false);

  const handleNavigation = () => {
    setNavigation(!navigation);
  };
  return (
    <header className="w-full bg-[#1E1E1E] text-[#8B0000] fixed top-0 left-0 z-30">
      <nav className="max-w-[1440px] w-full mx-auto
        h-[90px] flex justify-between items-center px-7 py-4"
      >
        <Link href="/">
          <p className="font-bold text-3xl lg:text-2xl xl:text-4xl cursor-pointer">Scooters</p>
        </Link>
        <ul className="hidden lg:flex uppercase font-semibold text-[14px] xl:text-[16px] cursor-pointer text-white">
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="ml-12" href="/pages/support">
              Suporte
            </Link>
          </li>
          <li>
            <Link className="ml-12" href="/pages/contact">
              Contact
            </Link>
          </li>
        </ul>
        <button type="button" onClick={handleNavigation} className="block lg:hidden z-10">
          {navigation
            ? <AiOutlineClose size={35} className="text-red-600" />
            : <AiOutlineMenu size={35} className="text-yellow-200" /> }
        </button>
        <div className={navigation
          ? 'lg:hidden absolute right-0 top-0 left-0 bottom-0 flex justify-center w-full items-center h-screen bg-slate-800 text-center ease-in duration-300'
          : 'lg:hidden absolute top-0 left-[-100%] bottom-0 flex justify-center items-center w-full h-screen text-center ease-in duration-300'}
        >
          <ul className="px-8 uppercase font-bold cursor-pointer">
            <li className="m-8 text-2xl" onClick={handleNavigation}>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className="m-8 text-2xl" onClick={handleNavigation}>
              <Link className="" href="/pages/support">
                Suporte
              </Link>
            </li>
            <li className="m-8 text-2xl" onClick={handleNavigation}>
              <Link href="/pages/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
