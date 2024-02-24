"use client"
import { useEffect, useRef, useState } from "react"
import EnterIcon from "./icon/enter"
import LogoutIcon from "./icon/logout"
import ProfileCircleIcon from "./icon/profile-circle"
import Link from "next/link"
import PenIcon from "./icon/pen"
import { usePathname } from 'next/navigation'
import HomeIcon from "./icon/home"

const Navbar = () => {
  const pathname = usePathname()
  const [toggleNavbar, setToggleNavbar] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setToggleNavbar(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full flex justify-between items-center">
        <button className="bg-orange-300 rounded-md px-3 py-[3px] border-2 border-orange-700 text-orange-700 cursor-pointer sm:hover:contrast-75 transition active:scale-95"
        onClick={() => setToggleNavbar(!toggleNavbar)}
        >Menu</button>

        <Link href={'/pages/create-story'} className={`bg-orange-300 rounded-md px-3 py-[3px] border-2 border-orange-700 text-orange-700 cursor-pointer sm:hover:contrast-75 transition active:scale-95 flex items-center gap-x-[6px] ${pathname.includes('/pages/read') && 'hidden'}`}>
          <PenIcon />Buat Cerpen
        </Link>

        {/* dropdown content */}
        <div ref={dropdownRef} className={`absolute top-0 left-0 mt-12 flex flex-col bg-orange-300 border-2 border-orange-700 w-fit h-fit z-20 rounded-md ${!toggleNavbar && 'hidden'}`}>
          {/* <div className="flex items-center gap-2">
            <div className="mt-[1px]"><EnterIcon /></div>
            <div className="text-orange-700">Login</div>
          </div> */}
          <Link href={'/'} className={`flex items-center gap-2 cursor-pointer bg-orange-300 px-2 py-1 sm:hover:contrast-75 rounded-md smooth-animation ${pathname == '/' && 'hidden'}`}>
            <div className=""><HomeIcon /></div>
            <div className="text-orange-700">Halaman Utama</div>
          </Link>
          {/* <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-2 py-1 sm:hover:contrast-75 rounded-md smooth-animation">
            <div className="bg-orange-200 border border-orange-700 w-[26px] h-[26px] rounded-full"></div>
            <div className="text-orange-700">Aziz Naufal</div>
          </div> */}
          <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-2 py-1 sm:hover:contrast-75 rounded-md smooth-animation">
            <div className=""><ProfileCircleIcon /></div>
            <div className="text-orange-700">Profil</div>
          </div>
          <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-2 py-1 sm:hover:contrast-75 rounded-md smooth-animation">
            <div className=""><LogoutIcon /></div>
            <div className="text-orange-700">Logout</div>
          </div>
        </div>
    </div>
  )
}

export default Navbar
