/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react';
import {
  FaWhatsappSquare,
  FaInstagramSquare,
  FaTiktok,
  FaBars,
} from 'react-icons/fa';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';

const Navbar = () => {
  const router = useRouter();

  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <header className="bg-sky-500 overflow-x-hidden">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-4 lg:px-0">
          <Link href="/">
            <a className="py-2">
              <img
                src="/images/logo_white.png"
                className="h-12 object-cover"
                alt="logo"
              />
            </a>
          </Link>

          <nav className="hidden md:flex items-center space-x-4">
            <Link href="/">
              <a
                className={
                  router.asPath === "/"
                    ? "border-b-2 border-gray-700 text-white text-base"
                    : "text-white text-base"
                }
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className={
                  router.asPath === "/about"
                    ? "border-b-2 border-gray-700 text-white text-base"
                    : "text-white text-base"
                }
              >
                About Us
              </a>
            </Link>{" "}
            <Link href="/products">
              <a
                className={
                  router.asPath === "/products"
                    ? "border-b-2 border-gray-700 text-white text-base"
                    : "text-white text-base"
                }
              >
                Products
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  router.asPath === "/contact"
                    ? "border-b-2 border-gray-700 text-white text-base"
                    : "text-white text-base"
                }
              >
                Contact Us
              </a>
            </Link>
          </nav>

          <ul className="flex items-center space-x-4">
            <li className="cursor-pointer">
              <Link href="https://instagram.com/skininc1988" passHref>
                <FaInstagramSquare className="text-2xl text-blue-50" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="https://wa.me/27683332924" passHref>
                <FaWhatsappSquare className="text-2xl text-blue-50" />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="https://www.tiktok.com/@skininc1988" passHref>
                <FaTiktok className="text-2xl text-blue-50" />
              </Link>
            </li>
          </ul>

          <div className="md:hidden">
            {show ? (
              <IoCloseOutline
                className="text-white text-3xl cursor-pointer"
                onClick={() => setShow(!show)}
              />
            ) : (
              <IoMenuOutline
                className="text-white text-3xl cursor-pointer"
                onClick={() => setShow(!show)}
              />
            )}
          </div>

          {show && (
            <div className="absolute top-20 right-10 transition duration-150 bg-sky-500 p-2 z-[1000]">
              <nav className="flex flex-col space-y-3 w-[200px]">
                {" "}
                <Link href="/">
                  <a
                    onClick={() => setShow(false)}
                    className={
                      router.asPath === "/"
                        ? "bg-sky-600 text-white text-base px-2 rounded hover:bg-sky-700"
                        : "text-white text-base px-2 rounded hover:bg-sky-700"
                    }
                  >
                    Home
                  </a>
                </Link>
                <Link href="/about">
                  <a
                    onClick={() => setShow(false)}
                    className={
                      router.asPath === "/about"
                        ? "bg-sky-600 text-white text-base px-2 rounded hover:bg-sky-700"
                        : "text-white text-base px-2 rounded hover:bg-sky-700"
                    }
                  >
                    About Us
                  </a>
                </Link>{" "}
                <Link href="/products">
                  <a
                    onClick={() => setShow(false)}
                    className={
                      router.asPath === "/products"
                        ? "bg-sky-600 text-white text-base px-2 rounded hover:bg-sky-700"
                        : "text-white text-base px-2 rounded hover:bg-sky-700"
                    }
                  >
                    Products
                  </a>
                </Link>
                <Link href="/contact">
                  <a
                    onClick={() => setShow(false)}
                    className={
                      router.asPath === "/contact"
                        ? "bg-sky-600 text-white text-base px-2 rounded hover:bg-sky-700"
                        : "text-white text-base px-2 rounded hover:bg-sky-700"
                    }
                  >
                    Contact Us
                  </a>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
