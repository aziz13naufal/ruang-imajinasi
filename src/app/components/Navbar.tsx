"use client"
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import Link from 'next/link';

const Navbar = () => {

    const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);

    return (
        <div className="w-full flex justify-between border-b h-16 items-center px-7 fixed top-0 bg-white z-10">
            <div className="left-side flex gap-7">
                <div className="logo-title flex">
                    <div className="text-pink-600">Ruang</div>
                    <div className="text-blue-600">Cerpen</div>
                </div>
                <div className="menu hidden md:flex gap-5 items-center">
                    <Link href="/pages/indexTemp" className="text-sm">Beranda</Link>
                    <div className="text-sm">Tentang Kami</div>
                </div>
            </div>
            <div className="right-side items-center">
                <Button content={'Masuk'} className={'hidden md:block'} />

                <div className="flex md:hidden flex-col gap-[6px] w-6 cursor-pointer" onClick={() => setToggleNavbar(!toggleNavbar)}>
                    <span className='w-full h-[3px] bg-zinc-700 rounded-full'></span>
                    <span className='w-full h-[3px] bg-zinc-700 rounded-full'></span>
                    <span className='w-full h-[3px] bg-zinc-700 rounded-full'></span>
                </div>

                <div className={`fixed top-0 right-0 mt-16 w-[60%] h-dvh bg-white z-20 border-l flex flex-col gap-2 md:hidden ${!toggleNavbar && 'hidden'}`}>
                    <div className="flex flex-col">
                        <Link href="/pages/indexTemp" className="text-sm w-full px-3 py-2 border-b hover:bg-zinc-100 cursor-pointer smooth-animation" onClick={() => setToggleNavbar(!toggleNavbar)}>Beranda</Link>
                        <div className="text-sm w-full px-3 py-2 border-b hover:bg-zinc-100 cursor-pointer smooth-animation" onClick={() => setToggleNavbar(!toggleNavbar)}>Tentang Kami</div>
                        <Button content={'Masuk'} className="w-full rounded-none hover:bg-blue-600 smooth-animation" onClick={() => setToggleNavbar(!toggleNavbar)} />
                    </div>
                </div>
            </div>
        </div>
  )
}
export default Navbar

