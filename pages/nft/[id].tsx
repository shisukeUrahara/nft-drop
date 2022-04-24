import React from 'react'

function NFTDropPage() {
  return (
      <div className='flex h-screen flex-col lg:grid lg:grid-cols-10'>
          {/* left side  */}
          <div className='bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4'>
             <div className='flex flex-col items-center justify-center py-2 lg:min-h-screen'>
             <div className='bg-gradient-to-br from-yellow-400 to-purple-500 p-2 rounded-xl'>
                  {/* image here */}
                  <img className='w-44 rounded-xl object-cover lg:w-96 lg:h-72' src="https://links.papareact.com/8sg" alt="" />
              </div>

              <div className='p-5 text-center space-y-2'>
                  <h1 className='text-4xl text-white font-bold'>PAPAFAM Apes</h1>
                  <h2 className='text-xl text-gray-300'>A collection of apes who live and breathe react</h2>
              </div>
             </div>

          </div>

          {/* right side */}
          <div className='flex flex-1 flex-col p-12 lg:col-span-6'>
                        {/* header */}
          <header className=' flex items-center justify-between '>
              <h1 className='w-52 cursor-pointer text-xl font-extralight sm:w-80'>The {' '} <span className='font-extrabold underline decoration-pink-600/50'>PAPAFAM</span> {' '} NFT Marketplace</h1>
              <button className='rounded-full text-white py-2 px-4 text-xs font-bold bg-rose-400 lg:px-5 lg:py-3 lg:text-base'>Sign In</button>
          </header>
          <hr className='my-2 border'/>
          {/* content */}
          <div className='mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:space-y-0 lg:justify-center'>
              <img className='w-80 object-cover pb-10 lg:h-40' src="https://links.papareact.com/bdy" alt="" />
              <h1 className='text-3xl font-bold lg:text-5xl lg:font-extrabold'>The PAPAFAM Ape Coding Club | NFT Drop</h1>
              <p className='pt-2 text-xl text-green-500'>13/21 NFT's Claimed</p>
          </div>
          {/* button */}
          <button className='h-12 w-full rounded-full text-white bg-red-600 mt-10 font-bold'>MINT NFT (0.1 ETH)</button>

          </div>
      </div>
  )
}

export default NFTDropPage