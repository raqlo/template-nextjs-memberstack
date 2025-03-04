export function Hero() {
  return (
    <header>
      {/* Hero Container */}
      <div className='mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-20'>
        {/* Component */}
        <div className='grid items-center justify-items-start gap-8 sm:gap-16 md:grid-cols-2'>
          {/* Hero Content */}
          <div className='flex flex-col'>
            {/* Hero Title */}
            <h1 className='mb-4 text-4xl font-bold md:text-6xl md:leading-tight'>
              The Website You Want Without The Dev Time.
            </h1>
            <p className='mb-6 max-w-lg text-sm text-gray-500 sm:text-xl md:mb-10 lg:mb-12'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam, purus sit amet luctus venenatis, lectus
            </p>
            {/* Hero Button */}
            <div className='flex items-center'>
              <a
                href='#'
                className='mr-5 items-center rounded-md bg-black px-6 py-3 font-semibold text-white md:mr-6 lg:mr-8'
              >
                Let&#39;s Talk
              </a>
              <a href='#' className='flex max-w-full items-center font-bold'>
                <img
                  src='https://assets.website-files.com/6458c625291a94a195e6cf3a/6458c625291a94bd85e6cf98_ArrowUpRight%20(4).svg'
                  alt=''
                  className='mr-2 inline-block max-h-4 w-5'
                />
                <p>View Showreel</p>
              </a>
            </div>
          </div>
          {/* Hero Image */}
          <img
            src='https://firebasestorage.googleapis.com/v0/b/flowspark-1f3e0.appspot.com/o/Tailspark%20Images%2FPlaceholder%20Image.svg?alt=media&token=375a1ea3-a8b6-4d63-b975-aac8d0174074'
            alt=''
            className='inline-block h-full w-full max-w-2xl'
          />
        </div>
      </div>
    </header>
  );
}
