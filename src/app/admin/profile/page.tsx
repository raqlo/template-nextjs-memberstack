'use client';
import { NextPage } from 'next';
import { useMember } from '@memberstack/react';
import { FormEvent, useEffect, useState } from 'react';

type CustomFieldKey = 'first-name' | 'last-name';
type CustomFields = Record<CustomFieldKey, string>;
type UseMemberReturn = ReturnType<typeof useMember>;

interface CustomMember extends UseMemberReturn {
  member: UseMemberReturn['member'] & {
    customFields: CustomFields;
  };
}

const ProfilePage: NextPage = () => {
  const { member, updateCustomFields } = useMember() as CustomMember;
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (member) {
      setFirstName(member.customFields['first-name']);
      setLastName(member.customFields['last-name']);
    }
  }, [member]); // Logs only when `member` changes

  const handleUpdateCustomFields = async (ev: FormEvent) => {
    ev.preventDefault();
    setLoading(true);
    setErrorMessage('');

    try {
      const res = await updateCustomFields({
        'first-name': firstName,
        'last-name': lastName,
      });
      // @ts-expect-error `_internalUseOnly` has a successful message from Memberstack server
      // can be changed for any static value
      setSuccessMessage(res['_internalUseOnly'].message)
    } catch (err) {
      setErrorMessage((err as Error).message);
    }
    setLoading(false);
  };

  return (
    <section>
      <div className='flex min-h-screen items-center justify-center'>
        <div className='max-w-lg rounded-lg border border-gray-400 bg-white px-14 py-8 lg:w-[768px] lg:max-w-[768px]'>
          <h4 className='mb-5 text-center text-xl font-bold md:text-3xl'>
            Your Details
          </h4>
          <p className='mx-auto max-w-[488px] text-center text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
            purus sit amet luctus magna fringilla urna
          </p>
          <form onSubmit={handleUpdateCustomFields} method={'POST'} className='py-14'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              <div>
                <label className='block font-semibold text-black'>
                  First Name
                </label>
                <input
                  name={'first-name'}
                  value={firstName}
                  onChange={(ev) => setFirstName(ev.target.value)}
                  type='text'
                  className='mt-2 block h-12 w-full rounded-md border border-gray-400 pl-3 shadow-sm sm:text-sm md:text-base'
                />
              </div>
              <div>
                <label className='block font-semibold text-black'>
                  Last Name
                </label>
                <input
                  name={'last-name'}
                  onChange={(ev) => setLastName(ev.target.value)}
                  value={lastName}
                  type='text'
                  className='mt-2 block h-12 w-full rounded-md border border-gray-400 pl-3 shadow-sm sm:text-sm md:text-base'
                />
              </div>
            </div>

            <div className='flex justify-end py-4'>
              <button
                type='button'
                className='mr-3 rounded-md border border-gray-400 bg-white px-5 py-2 font-semibold text-black shadow-sm hover:bg-gray-100'
              >
                Cancel
              </button>
              <input
                value={loading ? 'Submitting...' : 'Submit'}
                type='submit'
                className='rounded-md border border-transparent bg-black px-5 py-2 font-semibold text-white shadow-sm hover:bg-gray-800'
              />
            </div>
            {errorMessage && (
              <p className='mt-2 rounded-md bg-red-200 p-2 text-red-600'>
                {errorMessage}
              </p>
            )}
            {successMessage && (
                <p className='mt-2 rounded-md bg-green-100 p-2 text-green-900'>
                  {successMessage}
                </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
export default ProfilePage;
