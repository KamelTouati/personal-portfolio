import { useState } from "react";
import Link from "next/link";
import { HiHome, HiInformationCircle } from "react-icons/hi";
import { FaFileCode } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <nav
        className="flex justify-center rounded-lg glass px-2 sm:px-4 py-1 fixed z-20 border border-blue-400 lg:left-1/2 top-3 lg:-translate-x-1/2 w-[80%] lg:w-2/4 mx-5 sm:mx-0"
        style={{ boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px" }}
      >
        <div className="container flex flex-wrap items-center justify-center mx-auto">
          <div className="flex md:order-2">
            <button
              onClick={toggleNav}
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-blue-100 focus:outline-none"
              aria-controls="navbar-sticky"
              aria-expanded={isNavOpen ? "true" : "false"}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              isNavOpen ? "block" : "hidden"
            } items-center justify-between w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-5 md:mt-0 md:text-sm md:font-medium md:border-0">
              <li>
                <Link
                  href="/"
                  className="flex items-center block py-2 pl-3 pr-4 text-white md:bg-transparent hover:text-sky-500 md:p-0"
                  aria-current="page"
                >
                  <HiHome className="mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#aboutSection"
                  className="flex items-center block py-2 pl-3 pr-4 text-white hover:bg-gray-100 md:hover:bg-transparent hover:text-sky-500 md:p-0"
                >
                  <HiInformationCircle className="mr-2" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#projectsSection"
                  className="flex items-center block py-2 pl-3 pr-4 text-white hover:bg-gray-100 md:hover:bg-transparent hover:text-sky-500 md:p-0"
                >
                  <FaFileCode className="mr-2" />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#contactSection"
                  className="flex items-center block py-2 pl-3 pr-4 text-white hover:bg-gray-100 md:hover:bg-transparent hover:text-sky-500 md:p-0"
                >
                  <AiFillMessage className="mr-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <Outlet /> */}
    </>
  );
};

export default Navbar;
