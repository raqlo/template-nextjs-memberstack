'use client'
import { useAuth } from '@memberstack/react';
import Link from 'next/link';

export function AuthButtons() {
  const { isLoggedIn } = useAuth();
  if (isLoggedIn) {
    return (
      <>
        <Link
          className='font-inter md: rounded-lg md:px-6 md:py-4 md:hover:text-gray-800'
          href={'/dashboard'}
        >
          Dashboard
        </Link>
      </>
    );
  }
  return (
    <>
      <Link
        href={'/signup'}
        className='font-inter md: rounded-lg md:px-6 md:py-4 md:hover:text-gray-800'
      >
        Sign Up
      </Link>
      <Link
        className='font-inter rounded-lg bg-black px-8 py-4 text-center text-white hover:bg-gray-800'
        href={'/login'}
      >
        Login
      </Link>
    </>
  );
}
