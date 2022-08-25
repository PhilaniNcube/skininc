/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { Fragment } from 'react';
import supabase from '../../utils/supabase';

const Product = ({ product, relatedProducts }) => {
  console.log({product, relatedProducts});
  return (
    <Fragment>
      <div className="max-w-6xl mx-auto mt-4">
        <div className="px-4 2xl:container 2xl:mx-auto flex-col md:flex-row  md:px-6 2xl:px-20 flex justify-center items-stretch ">
          <div className=" flex xl:justify-between items-stretch flex-col md:w-2/3 lg:w-full h-full ">
            <img
              className="h-full rounded-lg object-cover"
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

            <div className="xl:mt-10 mt-6 flex justify-center items-center w-full xl:flex-row flex-col space-y-4 xl:space-y-0 xl:space-x-8"></div>

            <Link
              href={`https://wa.me/27683332924?text=I%20am%20looking%20to%20buy%20${product.name}`}
            >
              <a className="bg-sky-500 text-white font-medium text-lg px-8 w-[150px] text-center mt-3 py-2 rounded">
                Buy
              </a>
            </Link>

            <p className="mt-8 text-gray-700">
              The {product.name} contains these products
            </p>
            <div className="grid mt-2 grid-cols-1 gap-4">
              {relatedProducts.map((item) => (
                <Link key={item.id} href={`/products/${item.id}`} passHref>
                  <div className="w-full hover:bg-slate-100 cursor-pointer px-4 py-2">
                    <p className="text-md text-gray-600 font-bold">
                      {item.name}
                    </p>
                    <p className="text-lg text-gray-600 mt-2 font-medium">
                      R{item.price}
                    </p>
                    <p className="text-xs text-gray-600 mt-2 font-medium">
                      {item.description}
                    </p>
                    <p className="text-xs text-gray-600 mt-2 pb-3 font-medium">
                      <span className="font-bold">How to use:</span>{" "}
                      {item.directions}
                    </p>
                    <p className="text-xs text-gray-600 mt-2 pb-3 font-medium">
                      <span className="font-bold">Ingredients:</span>{" "}
                      {item.ingredients}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Product;

export async function getServerSideProps({ params: { id } }) {



  let { data, error } = await supabase
    .from('collections')
    .select('*')
    .eq('id', id)
    .single();

let relatedProducts = await supabase.from('skinproducts').select('*').eq('collection', id)



  return {
    props: {
      product: data,
      relatedProducts: relatedProducts.data
    },
  };
}
