"use client"

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from 'next/navigation';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className={`w-full flex flex-col p-2.5 items-center justify-center text-white ${pathname === '/' ? "bg-transparent absolute" : "bg-[#A60F2D] relative"}`}>
      <div className="justify-between items-center relative">
        <div className="border border-white rounded-md items-center justify-center p-1 cursor-pointer md:hidden" onClick={() => setMenuOpen(!menuOpen)}><Menu/></div>
        <div className="md:flex hidden h-full items-center gap-12 text-l font-medium">
          <Link href="/" className="contents text-2xl">
            <div className="h-[2em] aspect-11/4 relative">
              <Image src="/robosub_logo_flat.svg" alt="" fill priority />
            </div>
            <div className="font-semibold">Palouse RoboSub</div>
          </Link>
          <Link href="/guppy">Guppy</Link>
          <Link href="/docs">Docs</Link>
          <Link href="/about">About</Link>
          <Link href="/officers">Officers</Link>
          <Link href="/sponsors">Sponsors</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/pool-logs">Pool Logs</Link>
		      {/*<Link href="/gallery">Gallery</Link>*/}
          <Link href="/join" className="border-3 border-white px-2 py-1 rounded-lg transition-all duration-300 ease-in-out hover:bg-white hover:text-black no-underline">JOIN</Link>
          <Link target="_blank" href="https://foundation.wsu.edu/give/?fund=ffdf2195-2497-4361-b697-44e5024bf0b0" className="text-black bg-white border-3 border-white px-2 py-1 rounded-lg transition-all duration-300 ease-in-out no-underline hover:text-white hover:bg-[#14769C]">DONATE</Link>
        </div>
      </div>
      <div className="top-full bg-[#A60F2D] flex flex-col w-full gap-1.25 transition-all ease-in-out duration-300 overflow-hidden" style={{ maxHeight: `${menuOpen ? "300px" : "0px"}` }}>
        <Link href="/guppy">Guppy</Link>
        <Link href="/docs">Docs</Link>
        <Link href="/about">About</Link>
        <Link href="/officers">Officers</Link>
        <Link href="/sponsors">Sponsors</Link>
        <Link href="/blog">Blog</Link>
		    {/*<Link href="/gallery">Gallery</Link>*/}
        <Link href="/join" className="border-3 border-white p-2 rounded-lg transition-all duration-300 ease-in-out font-medium no-underline">JOIN</Link>
        <Link target="_blank" href="https://foundation.wsu.edu/give/?fund=ffdf2195-2497-4361-b697-44e5024bf0b0" className="text-black bg-white border-3 border-white p-2 rounded-lg transition-all duration-300 ease-in-out no-underline font-medium">DONATE</Link>
      </div>
    </header>
  )
}

export default Header;
