/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react';

const Navbar = () => {
  const router = useRouter();

  return (
    <Fragment>
      <header className="bg-sky-500">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
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
                  router.asPath === '/'
                    ? 'border-b-2 border-gray-700 text-white text-base'
                    : 'text-white text-base'
                }
              >
                Home
              </a>
            </Link>
            <Link href="/about">
              <a
                className={
                  router.asPath === '/about'
                    ? 'border-b-2 border-gray-700 text-white text-base'
                    : 'text-white text-base'
                }
              >
                About Us
              </a>
            </Link>{' '}
            <Link href="/services">
              <a
                className={
                  router.asPath === '/services'
                    ? 'border-b-2 border-gray-700 text-white text-base'
                    : 'text-white text-base'
                }
              >
                Services
              </a>
            </Link>
            <Link href="/contact">
              <a
                className={
                  router.asPath === '/contact'
                    ? 'border-b-2 border-gray-700 text-white text-base'
                    : 'text-white text-base'
                }
              >
                Contact Us
              </a>
            </Link>
          </nav>
        </div>
      </header>
    </Fragment>
  );
};

export default Navbar;
