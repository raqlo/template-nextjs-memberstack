'use client';
import { NextPage } from 'next';
import { useActionState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { signupUserAction } from '@/app/signup/actions';
import {DEFAULT_LOGIN_URL} from "@/app/auth/utils/enums";
import Link from "next/link";

const SignUpPage: NextPage = () => {
  const router = useRouter();
  const [state, formAction, pending] = useActionState(signupUserAction, {
    errorMessage: '',
    success: false,
  });

  useEffect(() => {
    if (state?.success) {
      router.replace(DEFAULT_LOGIN_URL);
    }
  }, [state?.success, router]);

  return (
    <section>
      {/* Container */}
      <div className='mx-auto w-full max-w-3xl px-5 py-16 md:px-10 md:py-20'>
        {/* Component */}
        <div className='mx-auto max-w-xl bg-gray-100 px-8 py-12 text-center'>
          {/* Title */}
          <h2 className='mx-auto max-w-sm text-center text-3xl font-bold md:text-5xl'>
            Start your 14-day free trial
          </h2>
          <p className='mx-auto my-5 max-w-md text-sm text-gray-500 sm:text-base lg:mb-8'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut
            aliquam,purus sit amet luctus magna fringilla urna
          </p>
          <div className='mx-auto w-full max-w-sm'>
            {/* Form */}
            <div className='mx-auto mb-4 max-w-sm pb-4'>
              <form action={formAction} name='wf-form-password'>
                <div className='relative'>
                  <img
                    alt=''
                    src='https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a9455fae6cf89_EnvelopeSimple.svg'
                    className='absolute left-5 top-3 inline-block'
                  />
                  <input
                    name='email'
                    type='email'
                    className='mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-black placeholder:text-black'
                    placeholder='Email Address'
                  />
                </div>
                <div className='relative mb-4'>
                  <img
                    alt=''
                    src='https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a946794e6cf8a_Lock-2.svg'
                    className='absolute left-5 top-3 inline-block'
                  />
                  <input
                    name='password'
                    minLength={8}
                    type='password'
                    className='mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-black placeholder:text-black'
                    placeholder='Password (min 8 characters)'
                  />
                </div>
                <input
                  disabled={pending}
                  type='submit'
                  value={pending ? 'Submitting' : 'Sign Up'}
                  className='mt-4 inline-block w-full cursor-pointer items-center rounded-md bg-black px-6 py-3 text-center font-semibold text-white'
                />
                {state && state.errorMessage && (
                  <p className='mt-2 rounded-md bg-red-200 p-2 text-red-600'>
                    {state.errorMessage}
                  </p>
                )}
              </form>
            </div>
            <p className='text-sm text-gray-500'>
              Already have an account?
              <Link href='/login' className='font-bold'>
                <span> </span> Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
