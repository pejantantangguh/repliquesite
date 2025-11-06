import Image from "next/image";
import Link from "next/link";



export default function Home() {
  return (
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
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">Account Number</dd>
                  <dt className="font-mono text-xs text-blue-600">
                    BSB: 034108 <br />
                    Account Number: 759743
                  </dt>
                </div>
                <div>
                  <dt className="font-mono text-sm text-blue-600">You can reach us via</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">Contact details</dd>
                  <dt className="font-mono text-xs text-blue-600">
                    Email <br className="md:hidden"/> church@repliquebrisbane.org <br />
                    Text or Call:  <br className="md:hidden"/> 0466 322 721 (Arvin) <br />
                  </dt>
                </div>
                <div>
                  <dt className="font-mono text-sm text-blue-600">Social Media</dt>
                  <dd className="mt-0.5 text-2xl font-semibold tracking-tight text-blue-900">
                    <div className="inline">
                      <Link href="https://www.instagram.com/repliquehouse/">
                        <Image alt ="Instagram" className="inline" width={50} height={50} src="/instagram-logo.png" />
                      </Link>
                      <Link href="https://www.youtube.com/channel/UCojRVh7C8PUlg4cOUqkWcMg">
                        <Image alt ="Youtube"className="inline" width={75} height={75} src="/Youtube-logo.png" />
                      </Link>
                    </div>
                  </dd>
                </div>
              </dl>
            </div>
  )
}
