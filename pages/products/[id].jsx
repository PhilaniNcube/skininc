/* eslint-disable @next/next/no-img-element */
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useEffect, useState } from "react";
import supabase from "../../utils/supabase";

const Product = ({ product }) => {
  console.log({ product });

    const router = useRouter();

    console.log({ router });

    const {
      data: comments,
      isLoading,
      isSuccess,
    } = useQuery(["comments"], async () => {
      let { data: comments, error } = await supabase
        .from("comments")
        .select("*").eq('product_id', router.query.id);

      return comments;
    });

    console.log({ comments });



    const handleSubmit = async (e) => {
      e.preventDefault();

      const { comment, id } = Object.fromEntries(new FormData(e.currentTarget));

      console.log({ comment, id });

      const { data, error } = await supabase
        .from("comments")
        .insert([{ text: comment, product_id: id }]);

      console.log({ data, error });
    };


  return (
    <Fragment>
      <div className="max-w-6xl mx-auto my-4">
        <div className="px-4 2xl:container 2xl:mx-auto flex-col md:flex-row  md:px-6 2xl:px-20 flex justify-center items-stretch ">
          <div className=" flex xl:justify-between items-stretch flex-col md:w-2/3 lg:w-full ">
            <img
              className="h-[45vh] w-full lg:h-[90vh] rounded-lg object-cover"
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
              <p className="text-sm text-gray-600">
                {" "}
                <span className="font-bold">Description:</span>{" "}
                {product.description}
              </p>
            </div>
            <div className="xl:mt-4 flex justify-center items-center w-full xl:flex-row flex-col space-y-4 xl:space-y-0 xl:space-x-8">
              <p className="text-sm text-gray-600">
                {" "}
                <span className="font-bold">Ingredients:</span>{" "}
                {product.ingredients}
              </p>
            </div>
            <div className="xl:mt-4 flex justify-center items-center w-full xl:flex-row flex-col space-y-4 xl:space-y-0 xl:space-x-8">
              <p className="text-sm text-gray-600">
                {" "}
                <span className="font-bold">Directions:</span>{" "}
                {product.directions}
              </p>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="my-4 px-4">
            <form onSubmit={handleSubmit} className="max-w-xl">
              <p className="text-2xl text-gray-500 font-medium">
                Add A Comment
              </p>
              <div className="flex flex-col">
                <label
                  className="text-sm text-gray-700 font-medium mt-2"
                  htmlFor="comment"
                >
                  Comment
                </label>
                <textarea
                  className="text-xs mt-2 text-gray-600 p-3 rounded-lg border bg-slate-200 placeholder:text-gray-400"
                  palceholder="Type your comment here"
                  id="comment"
                  name="comment"
                  rows={5}
                ></textarea>
                <input
                  hidden
                  className="text-sm text-gray-600"
                  name="id"
                  value={product.id}
                />
                <button className="mt-4 rounded-lg bg-slate-600 text-white px-3 py-1">
                  Submit
                </button>
              </div>
            </form>
          </div>

          <div className="w-full p-6">
            <p className="text-xl text-gray-700 font-medium underline">
              Comments
            </p>

            {comments?.map((item, i) => (
              <p
                className="mt-3 text-md text-gray-700 max-w-lg px-2 py-1 rounded bg-slate-100"
                key={item.id}
              >
                <span className="pr-2 text-xs">{i + 1}.</span>
                {item.text}
              </p>
            ))}
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
