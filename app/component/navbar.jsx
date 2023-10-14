import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
    return (
        <header className="z-1 flex-none lg:pt-11">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center sm:justify-between lg:flex-nowrap">
                <div className="mt-10 lg:mt-0 lg:grow lg:basis-0">
                    <Link href="/">
                        <Image src="/logo-REPLIQUE-FINAL.png"
                            alt='replique logo here'
                            width={125}
                            height={125} />
                    </Link>
                </div>
                <div className="text-xs sm:text-base mt-4 font-mono mx-auto flex items-center gap-4 px-4">
                    3/35 Manilla St, East Brisbane QLD 4169 <br />
                    Contact us - 0433 966 951 (Bebe)
                </div>
                <div className="sm:mt-10 sm:flex lg:mt-0 lg:grow lg:basis-0 lg:justify-end">
                    <Link href="https://maps.app.goo.gl/zQ9mRAQDycTnApAZ9" 
                        className="
                                   mt-4 inline-flex justify-center rounded-2xl
                                   bg-blue-600 p-4 text-base font-semibold text-white hover:bg-blue-500 focus:outline-none 
                                   focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 
                                   active:text-white/70" >
                        Click for Direction</Link>
                </div>
            </div>
        </header>
    )
}
