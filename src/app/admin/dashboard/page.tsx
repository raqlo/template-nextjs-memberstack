
export default function Dashboard() {
  return (
    <>
      <section>
        {/* Main Content */}
        <div className='mx-auto w-full max-w-7xl pb-16'>
          {/* Title */}
          <h4 className='px-10 py-10 text-xl font-bold md:px-20 md:text-3xl'>
            Result (12)
          </h4>
          <div className='px-10 py-10 md:px-20'>
            <div className='flex h-40 items-center justify-center rounded-lg border border-dashed border-gray-400 text-gray-400 md:h-80 lg:h-[642px]'>
              <p>Product List</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
