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
          content="Skin Inc is a South African based business , owned by Stacey-Lee Arends. We are an
                  online unisex skin care shop. Our products are pure organic, plant based which is
                  not only great for your skin but also for the environment."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </Fragment>
  );
}
