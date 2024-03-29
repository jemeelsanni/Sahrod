import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <header className="p-1 dark:bg-gray-800 dark:text-gray-100 relative">
        {open && (
          <>
            <div className=" md:hidden w-full bg-bluebg h-60 absolute top-0">
              <div onClick={() => setOpen(false)}>
                <img src="Vector3.png" className=" m-6" alt="" />
              </div>
              <ul className="items-stretch  space-x-3 md:block ">
                <li className="flex mb-2">
                  <Link
                    rel="noopener noreferrer"
                    to="/"
                    className=" flex items-center px-7 text-bluetext text-lg font-semibold hover:text-bluetext"
                  >
                    Home
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    rel="noopener noreferrer"
                    to="/Gallery"
                    className="flex items-center px-4 text-bluetext text-lg font-semibold hover:text-bluetext "
                  >
                    Gallery
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    rel="noopener noreferrer"
                    to="/About"
                    className="flex items-center px-4 text-bluetext text-lg font-semibold hover:text-bluetext"
                  >
                    About
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    rel="noopener noreferrer"
                    to="/Contact"
                    className="flex items-center px-4 text-bluetext text-lg font-semibold hover:text-bluetext "
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
        <div className="container flex justify-between h-16 ">
          <Link
            rel="noopener noreferrer"
            to="/"
            aria-label="Back to homepage"
            className="flex items-center ml-6 p-2 text-bluebg font-bold"
          >
            <div className="flex items-center">
              <img src="logo.jpg" alt="" className=" h-6" />
              <p>Sarod Academy</p>
            </div>
          </Link>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/"
                className="flex items-center px-4 text-bluebg text-lg font-semibold hover:text-bluetext"
              >
                Home
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/Gallery"
                className="flex items-center px-4 text-bluebg text-lg font-semibold hover:text-bluetext "
              >
                Gallery
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/About"
                className="flex items-center px-4 text-bluebg text-lg font-semibold hover:text-bluetext"
              >
                About
              </Link>
            </li>
            <li className="flex">
              <Link
                rel="noopener noreferrer"
                to="/Contact"
                className="flex items-center px-4 text-bluebg text-lg font-semibold hover:text-bluetext "
              >
                Contact Us
              </Link>
            </li>
          </ul>
          <button
            onClick={() => setOpen(!open)}
            className="flex justify-end p-4 md:hidden"
            control-id="ControlID-34"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
