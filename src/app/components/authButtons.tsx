'use client';
import {useAuth} from '@memberstack/react';
import Link from 'next/link';
import {useRouter} from "next/navigation";
import {DEFAULT_LOGOUT_URL} from "@/app/auth/utils/enums";

export function AuthButtons() {
  const { isLoggedIn, signOut } = useAuth();
  const router = useRouter();

    const handleLogout = async () => {
      await signOut();
      router.replace(DEFAULT_LOGOUT_URL)
  }

  if (isLoggedIn) {
    return (
      <>
        <Link
          className='font-inter md: rounded-lg md:px-6 md:py-4 md:hover:text-gray-800'
          href={'/admin/dashboard'}
        >
          Dashboard
        </Link>
        <Link
          href={'/admin/profile'}
          className='font-inter rounded-lg border-black border  px-8 py-4 text-center text-black hover:bg-gray-100'
        >
          Profile
        </Link>
        <button
          onClick={handleLogout}
          className='font-inter rounded-lg bg-black px-8 py-4 text-center text-white hover:bg-gray-800'
        >
          Logout
        </button>
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
