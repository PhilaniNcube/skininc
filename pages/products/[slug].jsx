/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import supabase from '../../utils/supabase';

const Product = ({ product }) => {
  console.log(product);

  return (
    <Fragment>
      <div className="max-w-6xl mx-auto mt-4">
        <div className="px-4 2xl:container 2xl:mx-auto flex-col md:flex-row  md:px-6 2xl:px-20 flex justify-center items-stretch ">
          <div className=" flex xl:justify-between items-stretch flex-col md:w-2/3 lg:w-full ">
            <img
              className="h-[45vh] lg:h-[90vh] rounded-lg object-cover"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="md:w-2/3 mt-7 md:mt-0 flex  md:px-6 xl:px-8  2xl:justify-between items-start flex-col md:py-12">
            <div className="flex w-full justify-between items-center">
              <p className="text-xl xl:text-2xl font-medium leading-5 xl:leading-normal text-gray-800">
                {product.name}
              </p>
            </div>
            <div className="flex w-full justify-between items-center mt-6 xl:mt-8">
              <div className="flex justify-start items-center space-x-6">
                <p className="text-xl leading-5 text-center text-gray-800">
                  R{product.price}
                </p>
              </div>
              <div className="flex jusitfy-end items-center space-x-2">
                <p className="text-base leading-none text-center text-gray-600">
                  5 / 5{' '}
                </p>
                <img
                  className="cursor-pointer"
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/product_review_10_svg1.svg"
                  alt="star"
                />
              </div>
            </div>
            <div className="xl:mt-10 mt-8 flex justify-start items-start flex-col space-y-5">
              <p className="text-lg xl:text-xl font-medium leading-none xl:leading-5 text-center text-gray-800">
                {product.size}
              </p>
            </div>

            <div className="xl:mt-10 mt-6 flex justify-center items-center w-full xl:flex-row flex-col space-y-4 xl:space-y-0 xl:space-x-8"></div>
            <p className="text-base leading-normal text-gray-600 mt-6 xl:mt-10">
              {product.description}
            </p>
            <p className="text-xs leading-normal text-gray-600 mt-6 xl:mt-10">
              <span>Ingredients:</span> {product.ingredients}
            </p>
            <p className="text-xs leading-normal text-gray-600 mt-6 xl:mt-10">
              <span>Directions:</span> {product.directions}
            </p>

 <p className="text-xs leading-normal text-gray-600 mt-6 xl:mt-10">
              <span>Directions:</span> {product.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;

export async function getServerSideProps({ params: { slug } }) {
  let { data: skinproducts, error } = await supabase
    .from('skinproducts')
    .select('*')
    .eq('slug', slug)
    .single();

  return {
    props: {
      product: skinproducts,
    },
  };
}
