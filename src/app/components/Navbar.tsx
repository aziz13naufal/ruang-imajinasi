"use client"
import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { deleteData } from '@/utils/fetch';
import { deleteCookie, getCookie } from 'cookies-next';
import { toast } from 'react-toastify';
import ModalBox from './modal/ModalBox';

const Navbar = () => {
    const token = getCookie('token')
    const router = useRouter()

    const [user, setUser] = useState<any>({})
    const [toggleNavbar, setToggleNavbar] = useState<boolean>(false);
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        const user = localStorage.getItem('user')
        if (user) {
            setUser(JSON.parse(user))
        }
    }, [])

    const handleLogout = async () => {
        try {
            // await deleteData('/logout')
            localStorage.removeItem("user")
            deleteCookie("token")
            toast.success('Logout berhasil !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            router.refresh()
        } catch (error) {
            toast.error('Logout gagal!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        }
    }

    return (
        <div className="w-full flex justify-between border-b h-16 items-center px-7 fixed top-0 bg-white z-50">
            <div className="left-side flex gap-7">
                <Link href={"/"} className="logo-title flex">
                    <div className="text-pink-600">Ruang</div>
                    <div className="text-blue-600">Cerpen</div>
                </Link>
                <div className="menu hidden md:flex gap-5 items-center">
                    <Link href="/" className="text-sm">Beranda</Link>
                    <div className="text-sm cursor-pointer"
                        onClick={() => {
                            if (user?.token != undefined && user?.token == token) {
                                router.push('/pages/create-story')
                            } else {
                                setShowModal(true)
                            }
                        }}>Buat Cerita</div>
                    <div className="text-sm">Tentang Kami</div>
                </div>
            </div>
            <div className="right-side items-center">
                <div className="">
                    {user?.token != undefined && user?.token == token ? (
                        <div className="" onClick={() => handleLogout()}>
                            <Button content={'Keluar'} className={'hidden bg-red-500 hover:bg-red-600 md:block'} />
                        </div>
                    ) : (
                        <div className="" onClick={() => router.push('/pages/auth/login')}>
                            <Button content={'Masuk'} className={'hidden md:block'} />
                        </div>
                    )}
                </div>

                <div className="flex md:hidden flex-col gap-[6px] w-6 cursor-pointer" onClick={() => setToggleNavbar(!toggleNavbar)}>
                    <span className='w-full h-[3px] bg-zinc-700 rounded-full'></span>
                    <span className='w-full h-[3px] bg-zinc-700 rounded-full'></span>
                    <span className='w-full h-[3px] bg-zinc-700 rounded-full'></span>
                </div>

                <div className={`fixed top-0 right-0 mt-16 w-[60%] h-dvh bg-white z-20 border-l flex flex-col gap-2 md:hidden ${!toggleNavbar && 'hidden'}`}>
                    <div className="flex flex-col">
                        <Link href="/" className="text-sm w-full px-3 py-4 border-b hover:bg-zinc-100 cursor-pointer smooth-animation" onClick={() => setToggleNavbar(!toggleNavbar)}>Beranda</Link>
                        <div className="text-sm w-full px-3 py-4 border-b hover:bg-zinc-100 cursor-pointer smooth-animation" onClick={() => {
                            setToggleNavbar(!toggleNavbar)
                            if (user?.token != undefined && user?.token == token) {
                                router.push('/pages/create-story')
                            } else {
                                setShowModal(true)
                            }
                        }}>Buat Cerita</div>
                        <div className="text-sm w-full px-3 py-4 border-b hover:bg-zinc-100 cursor-pointer smooth-animation" onClick={() => setToggleNavbar(!toggleNavbar)}>Tentang Kami</div>
                        {user?.token != undefined && user?.token == token ? (
                            <div className="absolute bottom-0 mb-16 w-full"
                                onClick={() => {
                                    setToggleNavbar(!toggleNavbar)
                                    handleLogout()
                                }}>
                                <Button content={'Keluar'} className="w-full rounded-none bg-red-500 hover:bg-red-600 smooth-animation" />
                            </div>
                        ) : (
                            <div className="absolute bottom-0 mb-16 w-full"
                                onClick={() => {
                                    setToggleNavbar(!toggleNavbar)
                                    router.push('/pages/auth/login')
                                }}>
                                <Button content={'Masuk'} className="w-full rounded-none hover:bg-blue-600 smooth-animation" />
                            </div>

                        )}
                    </div>
                </div>
            </div>

            <ModalBox
                isOpen={showModal}
                setIsOpen={setShowModal}
                title={'Sepertinya Anda Belum Masuk!'}
            >
                <div className="mt-2">
                    <p className="text-sm text-gray-500">
                        Silakan login terlebih dahulu agar Anda dapat membuat cerita dan berbagi kisah menarik dengan pengguna lainnya
                    </p>
                </div>

                <div className="mt-4 flex gap-3">
                    <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => {
                            setShowModal(false)
                            router.push('/pages/auth/login')
                        }}
                    >
                        Masuk
                    </button>
                </div>
            </ModalBox>
        </div>
    )
}
export default Navbar

