"use client"
import { useState } from "react"
import EnterIcon from "./icon/enter"
import LogoutIcon from "./icon/logout"
import ProfileCircleIcon from "./icon/profile-circle"


const Navbar = () => {
  const [toggleNavbar, setTogglaNavbar] = useState<boolean>(false)

  return (
    <div className="w-full flex justify-between items-center">
        <div 
          className="flex flex-col items-center justify-center w-[40px] h-[40px] gap-y-[5px] bg-orange-300 p-2 rounded-full cursor-pointer sm:hover:contrast-75 transition active:scale-95"
          onClick={() => setTogglaNavbar(!toggleNavbar)}>
          <span className="border-t-2 border-orange-700 rounded-full w-full"></span>
          <span className="border-t-2 border-orange-700 rounded-full w-full"></span>
          <span className="border-t-2 border-orange-700 rounded-full w-full"></span>
        </div>
        {/* button */}
        <button className="bg-orange-300 rounded-md px-3 py-[3px] border-2 border-orange-700 text-orange-700 cursor-pointer sm:hover:contrast-75 transition active:scale-95">Buat Cerpen</button>

        {/* dropdown content */}
        <div className={`absolute top-0 left-0 mt-12 flex flex-col bg-orange-300 border-2 border-orange-700 w-fit h-fit z-20 rounded-md ${!toggleNavbar && 'hidden'}`}>
          {/* <div className="flex items-center gap-2">
            <div className="mt-[1px]"><EnterIcon /></div>
            <div className="text-orange-700">Login</div>
          </div> */}
          <div className="flex items-center gap-2 cursor-pointer bg-orange-300 px-2 py-1 sm:hover:contrast-75 rounded-md smooth-animation">
            <div className="bg-orange-200 border border-orange-700 w-[26px] h-[26px] rounded-full"></div>
            <div className="text-orange-700">Aziz Naufal</div>
          </div>
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
