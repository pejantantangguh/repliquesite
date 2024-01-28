'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



export default function Home() {
  const [showModal, setShowModal] = useState(false)
  return (
    <main className="flex-auto">
      <div className='relative py-20 sm:pb-24 sm:pt-25 mt-5 bg-replique'>
        <div className='inset-0 overflow-hidden  -bottom-14 -top-36'>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
              <h1 className="font-display text-3xl font-bold tracking-tighter primaryColor-1 sm:text-7xl">
                Replique Church
              </h1>
              <div className="text-lg mt-6 space-y-6 font-display md:text-2xl tracking-tight text-blue-900">
                <p>Replique Ministry Brisbane is an Indonesian community church located East Brisbane</p>
                <p>We believe that as a church, we should be the replica of God, created in His image who serve and create impacts to people around us.
                </p>
                <p>
                  Our activites are Sunday Service, Sunday School, and Prayer Night
                </p>
                <p>
                  Sunday service: Sunday 10.30 AM
                </p>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 sm:mt-16 sm:gap-x-24 sm:gap-y-10 sm:text-center lg:auto-cols-auto lg:grid-flow-col lg:grid-cols-none lg:justify-start lg:text-left">
                <div>
                  <dt className="font-mono text-sm text-blue-600">Giving</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">Pay Id</dd>
                  <dt className="font-mono text-xs text-blue-600">
                    giving@repliquebrisbane.org
                  </dt>
                </div>
                <div>
                  <dt className="font-mono text-sm text-blue-600">Prayer Night</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">Zoom details</dd>
                  <dt className="font-mono text-xs text-blue-600">
                    Meeting Id : <br className="md:hidden"/> 896 3792 1078 <br />
                    Pwd: 658581 <br />
                    Every Wednesday at 7.30pm <br />
                  </dt>
                </div>
                <div>
                  <dt className="font-mono text-sm text-blue-600">Social Media</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                    <div className="inline">
                      <Link href="https://www.instagram.com/repliquehouse/">
                        <Image className="inline" width={50} height={50} src="/instagram-logo.png" />
                      </Link>
                      <Link href="https://www.youtube.com/channel/UCojRVh7C8PUlg4cOUqkWcMg">
                        <Image className="inline" width={75} height={75} src="/Youtube-logo.png" />
                      </Link>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}




// https://www.youtube.com/watch?v=kLFSTaCqzdQ