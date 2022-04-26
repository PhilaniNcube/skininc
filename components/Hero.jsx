import React, { Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <Fragment>
      <div className="relative h-[91vh] overflow-hidden">
        <div className="absolute inset-0 z-20  object-cover">
          <Image
            src="/images/bg.jpg"
            alt="skin care"
            className="min-h-[88vh] object-cover"
            layout="fill"
          />
        </div>
        <div className="absolute inset-0 z-40 bg-gray-900 bg-opacity-50 flex flex-col space-y-4 justify-center items-center">
          <h1 className="font-bold text-white text-3xl md:text-4xl lg:text-6xl mb-4">
            Love Thy Self
          </h1>
          <Link href="/about" passHref>
            <button className="bg-sky-500 text-white px-6 py-2 rounded mt-4">
              Learn About Us
            </button>
          </Link>
          <p className="text-base text-white text-center max-w-[55ch]">
            Skin Inc is a South African based business , owned by Stacey-Lee
            Arends. We are an online unisex skin care shop. Our products are
            pure organic, plant based which is not only great for your skin but
            also for the environment.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default Hero;
