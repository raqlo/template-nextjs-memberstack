import { NextPage } from 'next';

const ProfilePage: NextPage = () => (
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
        <form className='py-14'>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className='block font-semibold text-black'>
                First Name
              </label>
              <input
                type='text'
                className='mt-2 block h-12 w-full rounded-md border border-gray-400 pl-3 shadow-sm sm:text-sm md:text-base'
              />
            </div>
            <div>
              <label className='block font-semibold text-black'>
                Last Name
              </label>
              <input
                type='text'
                className='mt-2 block h-12 w-full rounded-md border border-gray-400 pl-3 shadow-sm sm:text-sm md:text-base'
              />
            </div>
          </div>
          <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2'>
            <div>
              <label className='block font-semibold text-black'>Email</label>
              <input
                type='email'
                className='mt-2 block h-12 w-full rounded-md border border-gray-400 pl-3 shadow-sm sm:text-sm md:text-base'
              />
            </div>
            <div>
              <label className='block font-semibold text-black'>
                Phone Number
              </label>
              <input
                type='text'
                className='mt-2 block h-12 w-full rounded-md border border-gray-400 pl-3 shadow-sm sm:text-sm md:text-base'
              />
            </div>
          </div>
          <div className='mt-8'>
            <label className='block font-semibold text-black'>Address</label>
            <input
              type='text'
              className='mt-2 block h-12 w-full rounded-md border border-gray-400 pl-3 shadow-sm sm:text-sm md:text-base'
            />
          </div>
          <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
            <div>
              <label className='block font-semibold text-black'>City</label>
              <input
                type='text'
                className='mt-2 block h-12 w-full rounded-md border border-gray-400 pl-3 shadow-sm sm:text-sm md:text-base'
              />
            </div>
            <div>
              <label className='block font-semibold text-black'>State</label>
              <input
                type='text'
                className='mt-2 block h-12 w-full rounded-md border border-gray-400 pl-3 shadow-sm sm:text-sm md:text-base'
              />
            </div>
            <div>
              <label className='block font-semibold text-black'>Zip code</label>
              <input
                type='text'
                className='mt-2 block h-12 w-full rounded-md border border-gray-400 pl-3 shadow-sm sm:text-sm md:text-base'
              />
            </div>
          </div>
        </form>
        <div className='flex justify-end'>
          <button
            type='button'
            className='mr-3 rounded-md border border-gray-400 bg-white px-5 py-2 font-semibold text-black shadow-sm hover:bg-gray-100'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='rounded-md border border-transparent bg-black px-5 py-2 font-semibold text-white shadow-sm hover:bg-gray-800'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </section>
);
export default ProfilePage;
