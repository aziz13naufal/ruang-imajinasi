import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="w-full h-dvh p-4 sm:p-6 flex items-center justify-center bg-bg-primary relative">
      <div className="md:border border-orange-300 md:p-10 rounded-md md:bg-orange-200">
        <div className="text-center">SILAHKAN LOGIN</div>
        <form className='flex flex-col'>
          <input type="text" placeholder='username' className='bg-bg-primary rounded-md px-3 py-[3px] border-2 border-orange-700 mt-5' />
          <input type="password" placeholder='password' className='bg-bg-primary rounded-md px-3 py-[3px] border-2 border-orange-700 mt-5' />

          <button type='button' className='bg-orange-300 rounded-md px-3 py-[3px] border-2 border-orange-700 text-orange-700 cursor-pointer mt-5'><Link href={"/"}>LOGIN</Link> </button>
          <div className="font-normal mt-3">Belum punya akun? <Link href={"/"} className='font-medium'>Buat akun disini</Link></div>
        </form>
      </div>
    </div>
  )
}

export default Login
