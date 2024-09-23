export const Header = () => {
  return (
    <header className="relative mx-auto grid max-w-[90%] content-between justify-items-center overflow-hidden border border-t-0 border-gray-800 bg-[url('/assets/images/hero-sec-pattern.png')] sm:max-w-full sm:px-4">
      <img
        className="absolute -bottom-3 -z-10 max-h-[55%] max-w-min object-cover"
        src="/assets/images/hero-sec-abstract.png"
        alt="hero section abstract background"
      />
      <h1 className="mt-28 max-w-lg text-center text-5xl font-semibold text-white sm:text-3xl">A Digital Product Studio that will Work</h1>
      <div className="mt-8 w-fit rounded-lg border border-solid border-gray-800 bg-gray-900 bg-opacity-20 px-8 py-5 text-lg font-normal backdrop-blur-[8px]">
        <p className="text-lg font-normal text-gray-300 sm:text-base">
          For{" "}
          <span className="rounded-md bg-gray-800 px-[0.625rem] py-2 text-lg font-normal text-white lg:text-base md:bg-opacity-0 md:p-0 md:text-gray-300">
            Startups
          </span>{" "}
          ,{" "}
          <span className="rounded-md bg-gray-800 px-[0.625rem] py-2 text-lg font-normal text-white lg:text-base md:bg-opacity-0 md:p-0 md:text-gray-300">
            Enterprise leaders
          </span>{" "}
          ,{" "}
          <span className="rounded-md bg-gray-800 px-[0.625rem] py-2 text-lg font-normal text-white lg:text-base md:bg-opacity-0 md:p-0 md:text-gray-300">
            Media & Publishers
          </span>{" "}
          and{" "}
          <span className="rounded-md bg-gray-800 px-[0.625rem] py-2 text-lg font-normal text-white lg:text-base md:bg-opacity-0 md:p-0 md:text-gray-300">
            Social Good
          </span>
        </p>
      </div>
      <div className="mb-60 mt-10">
        <a
          href="#"
          className="inline-block rounded-lg border border-gray-700 bg-gray-800 bg-opacity-20 px-5 py-[0.875rem] text-sm font-medium text-white backdrop-blur-[8px] hover:bg-gray-700"
        >
          Our Works
        </a>
        <a
          href="#contactUs"
          className="ml-3 inline-block rounded-lg bg-primary-900 px-5 py-[0.875rem] text-sm font-medium text-gray-800 hover:bg-primary-700"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
};
