import React from 'react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import type { GetServerSideProps, NextPage } from 'next'
import { sanityClient, urlFor } from '../../sanity'
import { Collection } from '../../typings'
import Link from 'next/link'

interface Props {
  collection: Collection
}

function NFTDropPage({ collection }: Props) {
  //  react hooks for metamask authentication
  const connectMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* left side  */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-500 p-2">
            {/* image here */}
            <img
              className="w-44 rounded-xl object-cover lg:h-72 lg:w-96"
              src="https://links.papareact.com/8sg"
              alt=""
            />
          </div>

          <div className="space-y-2 p-5 text-center">
            <h1 className="text-4xl font-bold text-white">
              {collection?.nftCollectionName}
            </h1>
            <h2 className="text-xl text-gray-300">{collection.description}</h2>
          </div>
        </div>
      </div>

      {/* right side */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* header */}
        <header className=" flex items-center justify-between ">
          <Link href={'/'}>
            <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
              The{' '}
              <span className="font-extrabold underline decoration-pink-600/50">
                PAPAFAM
              </span>{' '}
              NFT Marketplace
            </h1>
          </Link>
          <button
            onClick={() => (address ? disconnect() : connectMetamask())}
            className="rounded-full bg-rose-400 py-2 px-4 text-xs font-bold text-white lg:px-5 lg:py-3 lg:text-base"
          >
            {address ? 'Sign Out' : 'Sign In'}
          </button>
        </header>
        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-rose-400">
            You are logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}
        {/* content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src={urlFor(collection.mainImage).url()}
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            {collection?.title}
          </h1>
          <p className="pt-2 text-xl text-green-500">13/21 NFT's Claimed</p>
        </div>
        {/* button */}
        <button className="mt-10 h-12 w-full rounded-full bg-red-600 font-bold text-white">
          MINT NFT (0.1 ETH)
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `*[_type=='collection' && slug.current==$id][0]{
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage{
    asset
  },
  previewImage{
    asset
  },
  slug{
  current
  },
  creator->{
    _id,
    name,
    address,
    slug{
  current},
  }
  }`

  // console.log('**@ query params are , ', params)

  const collection = await sanityClient.fetch(query, {
    id: params?.id,
  })
  // console.log('**@ fetched props 2 collections are ,', collection)

  if (!collection) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      collection,
    },
  }
}
