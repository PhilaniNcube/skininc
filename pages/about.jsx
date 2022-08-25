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
              SKIN INC. is a unisex online skincare and libido enhancing store
              which specializes in organic hand-crafted cosmetics, feminine
              care, and libido essentials. Our products are made from the finest
              sourced, paraben free raw materials, essential oils and herbs with
              amazing healing, restoration, and enhancement properties. My
              journey started 2 years ago when I decided to investigate ways to
              amplify my quality of life, which spurred me into extensive
              research on formulating and manufacturing. This eventually led to
              me developing my very own range of products. Trailing my products
              with family, friends and colleagues produced remarkable results
              and this propelled me into the direction of starting my own
              business to share my findings. Long story short my cloud turned to
              a silver lining and SKIN INC was born. We are elated with the
              growth of SKIN INC and hope that you would join us on our journey.
            </p>
            <div className="grid grid-cols-12 gap-3">
              <BiRocket className="text-sky-500 place-self-start text-3xl" />
              <div className="col-span-11">
                <h3 className="text-lg text-sky-500 uppercase">
                  Our vision and mission
                </h3>
                <p className="text-sm text-gray-700">
                  Our mission is to make a positive difference in the lives of
                  people by providing safe and effective skin care, feminine and
                  libido products. We strive to provide natural solutions to
                  help improve quality of life and provide organic ways in which
                  to upgrade your self-care routine.
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
