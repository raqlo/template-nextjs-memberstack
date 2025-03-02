'use client';
import { NextPage } from 'next';
import { useActionState } from 'react';
import {signupUserAction} from "@/app/signup/actions";


const SignUpPage: NextPage = () => {
  const [state, formAction] = useActionState(signupUserAction, {
    errorMessage: '',
  });

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
            <a
              href='#'
              className='flex w-full max-w-full justify-center rounded-md bg-black py-3 text-white'
            >
              <img
                src='https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a947090e6cf87_GoogleLogo.svg'
                alt=''
                className='mr-4 inline-block'
              />
              <p className='text-sm sm:text-base'>Sign up with Google</p>
            </a>
            {/* Divider */}
            <div className='mb-14 mt-14 flex w-full justify-around'>
              <img
                src='https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ef4e6cf94_Line%203.svg'
                alt=''
                className='inline-block'
              />
              <p className='text-sm text-gray-500'>or sign up with email</p>
              <img
                src='https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a948ef4e6cf94_Line%203.svg'
                alt=''
                className='inline-block'
              />
            </div>
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
                    type='password'
                    className='mb-4 block h-9 w-full rounded-md border border-solid border-black px-3 py-6 pl-14 text-sm text-black placeholder:text-black'
                    placeholder='Password (min 8 characters)'
                  />
                </div>
                <input
                  type='submit'
                  value='Sign Up'
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
              <a href='#' className='font-bold'>
                <span> </span> Login now
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
