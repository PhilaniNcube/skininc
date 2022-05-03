import React, { Fragment } from 'react';
import Image from 'next/image';
import { BiRocket } from 'react-icons/bi';
import { FiTarget } from 'react-icons/fi';
import { IoDiamondOutline } from 'react-icons/io5';

const About = () => {
  return (
    <Fragment>
      <div className="max-w-6xl mx-auto py-8 px-4 lg:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="">
            <h1 className="text-xl md:text-2xl lg:text-4xl text-sky-500 font-bold">
              About Us
            </h1>
            <p className="text-sm md:text-base text-gray-700 my-4">
              SKIN INC. is a unisex online skin care shop which specializes in
              organic handcrafted cosmetics and feminine products. Skin and
              beauty essentials made from the finest sourced chemical free raw
              materials which have amazing healing and restoring properties. My
              business started 2 years ago when I got pregnant with my son. I
              was looking for natural products for my stretch marks developed
              during the pregnancy period. The battle to find organic products
              to use during this period spured me to do extensive research and I
              started developing my own products based on the fact that most
              products on the market were not 100% natural or organic. My
              products that I developed and manufactured produced remarkable
              results, I used the same products on my son when he was born. My
              son suffered from eczema,which I treated successfully with my
              products. Long story short,my cloud turned to a silver lining. A
              skin care business has been born and we are excited with the
              growth of Skin Inc.
            </p>
            <div className="grid grid-cols-12 gap-3">
              <BiRocket className="text-sky-500 place-self-start text-3xl" />
              <div className="col-span-11">
                <h3 className="text-lg text-sky-500 uppercase">
                  Our vision and mission
                </h3>
                <p className="text-sm text-gray-700">
                  Our mission is to make a positive difference in the lives of
                  people by providing safe and effective skin care products. We
                  strive to provide natural solutions to help improve quality of
                  life and provide organic ways in which to upgrade your
                  self-care routine.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-3 my-6">
              <FiTarget className="text-sky-500 place-self-start text-3xl" />
              <div className="col-span-11">
                <h3 className="text-lg text-sky-500 uppercase">Goals</h3>
                <ul className="text-sm text-gray-700">
                  <li>Expand brand awareness.</li>
                  <li>Create employment opportunities.</li>
                  <li>Provide environmentally friendly organic products.</li>
                  <li>Create a solid client base.</li>
                  <li>
                    Be recognised for the quality and effectiveness of our
                    products.
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-3">
              <IoDiamondOutline className="text-sky-500 place-self-start text-3xl" />
              <div className="col-span-11">
                <h3 className="text-lg text-sky-500 uppercase">Our values</h3>
                <p className="text-sm text-gray-700">
                  Skin Inc strives to create loyalty and trust, by infusing
                  passion and love into each product we produce.
                </p>
              </div>
            </div>
          </div>
          <div className="rounded overflow-hidden shadow-md">
            <div className="object-cover overflow-hidden rounded-lg h-[90vh] md:h-full">
              <Image
                src="/images/victoria.jpg"
                width={1280}
                height={1920}
                alt="skin care"
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
