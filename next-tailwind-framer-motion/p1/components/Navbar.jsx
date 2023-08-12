import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <header className='flex justify-between items-center py-4 px-2'>
      <h1>
        <Link href='/' className='flex items-center gap-[1ch]'>
          <span className='w-5 h-5 bg-yellow-400 rounded-full'></span>
          <span className='text-sm font-semibold tracking-widest'>
            PORTFOLIO
          </span>
        </Link>
      </h1>
      <nav className='flex gap-12 text-md text-zinc-400'>
        <Link href='/' className='text-black font-medium'>
          Home
        </Link>
        <Link href='/projects'>Projects</Link>
        <Link href='/contact'>Contact</Link>
      </nav>
    </header>
  );
};

export default Navbar;
