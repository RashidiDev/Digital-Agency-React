import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-10 mx-auto flex max-w-[90%] items-center justify-between py-5">
      <a href="#" className="shrink-0">
        <img className="w-fit" src="/assets/images/Logo.png" alt="Logo" />
      </a>
      <button
        onClick={() => setIsOpen(true)}
        id="open-nav-menu-btn"
        className="hidden rounded-md bg-gray-800 p-[0.375rem] hover:bg-gray-700 lg:block"
      >
        <Bars3BottomRightIcon className="h-5 w-5 fill-primary-600" />
      </button>
      <div
        id="nav-menu"
        className={`${isOpen ? "lg:right-0" : "lg:-right-full"} transition-all duration-500 lg:fixed lg:-right-full lg:top-0 lg:z-50 lg:grid lg:h-screen lg:w-52 lg:content-start lg:bg-gray-900/30 lg:pt-5 lg:backdrop-blur-md sm:w-full`}
      >
        <button
          onClick={() => setIsOpen(false)}
          id="close-nav-menu-btn"
          className="mb-5 mr-5 hidden w-fit self-end justify-self-end rounded-md bg-gray-800 p-[0.375rem] hover:bg-gray-700 lg:block"
        >
          <XMarkIcon className="h-5 w-5 fill-primary-600" />
        </button>
        <ul className="flex font-semibold text-white lg:flex-col">
          <li className="mx-1 lg:mx-0 sm:text-center">
            <a
              className="inline-block rounded-md bg-gray-800 px-[1.375rem] py-3 text-sm font-medium hover:bg-gray-700 lg:w-full lg:rounded-none"
              href="#"
            >
              Home
            </a>
          </li>
          <li className="mx-1 lg:mx-0 sm:text-center">
            <a
              className="inline-block rounded-md px-[1.375rem] py-3 text-sm font-medium hover:bg-gray-700 lg:w-full lg:rounded-none"
              href="#"
            >
              Services
            </a>
          </li>
          <li className="mx-1 lg:mx-0 sm:text-center">
            <a
              className="inline-block rounded-md px-[1.375rem] py-3 text-sm font-medium hover:bg-gray-700 lg:w-full lg:rounded-none"
              href="#"
            >
              Work
            </a>
          </li>
          <li className="mx-1 lg:mx-0 sm:text-center">
            <a
              className="inline-block rounded-md px-[1.375rem] py-3 text-sm font-medium hover:bg-gray-700 lg:w-full lg:rounded-none"
              href="#"
            >
              Process
            </a>
          </li>
          <li className="mx-1 lg:mx-0 sm:text-center">
            <a
              className="inline-block rounded-md px-[1.375rem] py-3 text-sm font-medium hover:bg-gray-700 lg:w-full lg:rounded-none"
              href="#"
            >
              About
            </a>
          </li>
          <li className="mx-1 lg:mx-0 sm:text-center">
            <a
              className="inline-block rounded-md px-[1.375rem] py-3 text-sm font-medium hover:bg-gray-700 lg:w-full lg:rounded-none"
              href="#"
            >
              Careers
            </a>
          </li>
        </ul>
      </div>
      <a
        href="#contactUs"
        className="rounded-md bg-primary-900 px-[1.375rem] py-3 text-sm font-medium text-gray-800 hover:bg-primary-700 lg:hidden"
      >
        Contact Us
      </a>
    </nav>
  );
};
