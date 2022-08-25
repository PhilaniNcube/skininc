/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { Fragment, useEffect, useState } from "react";
import supabase from "../../utils/supabase";

const Product = ({ product }) => {
  console.log({ product });
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
              <p className="text-xl xl:text-2xl font-medium text-gray-600">
                {product.name}
              </p>
            </div>
            <div className="flex w-full justify-between items-center mt-6 xl:mt-8">
              <div className="flex justify-start items-center space-x-6">
                <p className="text-xl leading-5 text-center text-gray-800">
                  R {product.price}
                </p>
              </div>
            </div>
            <div className="xl:mt-10 mt-8 flex justify-start items-start flex-col space-y-5"></div>

            <div className="xl:mt-4 flex justify-center items-center w-full xl:flex-row flex-col space-y-4 xl:space-y-0 xl:space-x-8">
            <p className="text-sm text-gray-600"> <span className="font-bold">Description:</span> {product.description}</p>
            </div>
            <div className="xl:mt-4 flex justify-center items-center w-full xl:flex-row flex-col space-y-4 xl:space-y-0 xl:space-x-8">
            <p className="text-sm text-gray-600"> <span className="font-bold">Ingredients:</span> {product.ingredients}</p>
            </div>
            <div className="xl:mt-4 flex justify-center items-center w-full xl:flex-row flex-col space-y-4 xl:space-y-0 xl:space-x-8">
            <p className="text-sm text-gray-600"> <span className="font-bold">Directions:</span> {product.directions}</p>
            </div>

            <Link
              href={`https://wa.me/27683332924?text=I%20am%20looking%20to%20buy%20${product.name}`}
            >
              <a className="bg-sky-500 text-white font-medium text-lg px-8 w-[150px] text-center mt-3 py-2 rounded">
                Buy
              </a>
            </Link>


          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;

export async function getServerSideProps({ params: { id } }) {
  let { data, error } = await supabase
    .from("skinproducts")
    .select("*")
    .eq("id", id)
    .single();



  return {
    props: {
      product: data,

    },
  };
}
