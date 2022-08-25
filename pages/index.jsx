import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Skin Inc</title>
        <meta
          name="description"
          content="Skin Inc is a South African based business owned by Stacey Lee Arends. We are an online unisex skincare and libido shop. Our products are made from organic plant based raw materials which are locally sourced. Good for your skin, Good for your libido, Good for the environment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Fragment>
  );
}
