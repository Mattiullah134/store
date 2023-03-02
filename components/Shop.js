import React from 'react'
import Link from 'next/link'
import { AiOutlineArrowRight } from 'react-icons/ai';



const products = [
  {
    id: 1,
    name: 'Tonic',
    href: '/tonic',
    imageSrc: 'https://www.vegas.pk/beta-admin/public/storage/images/product/1671184386--glow%20tonic.jpg',
    imageAlt: "tonic for the face",
  },

]


function Shop() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className='flex flex-col md:flex-row items-center justify-between'>
          <h2 className="text-xl md:text-2xl font-sans font-bold tracking-tight text-gray-900">Shop by Category</h2>
          {/* <Link href={'/items'} className='font-semibold text-sm md:text-base flex items-center text-indigo-700 hover:text-indigo-800'>Browse all categories <AiOutlineArrowRight className='ml-1' /></Link> */}
        </div>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative flex flex-col-reverse md:flex-col">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img src={product.imageSrc} alt={product.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
              </div>
              <div className="mt-4 flex justify-between">
                <h3 className="text-base text-gray-700">
                  <Link href={product.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {product.name}
                  </Link>
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


export default Shop