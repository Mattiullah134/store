import React from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Product from '../models/Product';
import mongoose from "mongoose";

function Tshirt({ product }) {

  return (
    <>
      <Head>
        <title>Organic cure / tonic</title>
        <title>Organic cure</title>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0" />
      </Head>
      <div className="bg-white">
        <div className="mx-auto min-h-screen max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Products</h2>

          {product.data.length === 0 && <div className="font-semibold text-center">Sorry! Currently Stock Unavailble right now. Please wait for the new Stock.!</div>}
          <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">

            {product.data.map((item) => {
              return <div key={item._id} className="group relative">
                <div className="aspect-w-1 flex justify-center border aspect-h-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-w-7 xl:aspect-h-8 ">
                  <img
                    src={item.prodtImage}
                    className="h-full w-full object-contain group-hover:opacity-75"
                  />
                </div>
                <img src={item.img} className="w-10 absolute bottom-20 right-30" />
                <h3 className="mt-4 text-sm text-gray-700">{item.title}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${item.price}</p>
              </div>
            })}
          </div>
        </div>
      </div>
    </>
  )
}


export async function getServerSideProps() {

  const data = await fetch('http://localhost:3000/api/getProduct', {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const jsonData = await data.json();
  // Pass data to the page via props
  return {
    props: { product: jsonData }
  }
}


export default Tshirt