/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from 'react';
import Link from 'next/link';
import supabase from '../utils/supabase';

const ProductPage = ({ products, collections }) => {

  console.log(products);

  return (
    <Fragment>
      <div className="bg-gradient-to-r from-pink-300 to-sky-300 min-h[30vh]">
        <div className="flex flex-col items-center justify-center text-center text-white py-12">
          <h1 className="text-2xl md:text-3xl lg:text-5xl uppercase tracking-wider">
            <span>Our</span>
            <span className="font-bold"> Products</span>
          </h1>
          <p className="max-w-[90ch] px-8 my-4">
            Skin Inc offers business opportunities to individuals who would like
            to start their own skincare line by providing starter kits and raw
            materials needed.
          </p>
        </div>
      </div>
      <div className="bg-white max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-gray-700 text-center mb-4 text-3xl font-extrabold">
            Collections
          </h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {collections?.map((product) => (
              <Link key={product.id} href={`/collections/${product.id}`} passHref>
                <div className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    R {product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-2xl mx-auto py-16 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-gray-700 text-center mb-4 text-3xl font-extrabold">
            Products
          </h2>

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`} passHref>
                <div className="group">
                  <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-64 object-center object-cover group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">
                    R {product.price.toFixed(2)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductPage;

export async function getServerSideProps() {
  let { data: collections, error } = await supabase
    .from("collections")
    .select("*")
    .order("name", { ascending: true });

    let products = await supabase
      .from("skinproducts")
      .select("*")


      console.log(collections);


  return {
    props: {
     collections,
    products: products.data
    },
  };
}
