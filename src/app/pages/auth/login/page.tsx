import Button from '@/app/components/Button'
import TextInput from '@/app/components/TextInput'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="w-full h-dvh p-4 sm:p-6 flex items-center bg-white sm:bg-zinc-100 justify-center relative">
      <div className="sm:border sm:p-10 rounded-md sm:bg-white">
        <Link href={"/pages/indexTemp"} className="logo-title flex w-full justify-center">
            <div className="text-pink-600">Ruang</div>
            <div className="text-blue-600">Cerpen</div>
        </Link>
        <form className='flex flex-col gap-4 mt-9 sm:w-[350px]'>
          <div className="">
            <TextInput 
            placeholder="Email"
            className="text-sm py-2" />
          </div>
          <div className="">
            <TextInput 
            placeholder="Password"
            className="text-sm py-2" />
          </div>
          <Button content="Login" className="mt-5" />
          <div className="font-normal text-sm mt-3">Belum punya akun? <Link href={"/pages/indexTemp"} className='font-medium text-sm text-blue-600'>Buat akun disini</Link></div>
        </form>
      </div>
    </div>
  )
}

export default Login
