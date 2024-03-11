"use client"

import Button from '@/app/components/Button'
import TextInput from '@/app/components/TextInput'
import EyeClosedIcon from '@/app/components/icon/eye-closed'
import EyeIcon from '@/app/components/icon/eye-icon'
import { postData } from '@/utils/fetch'
import { setCookie } from 'cookies-next'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Login = () => {
    const router = useRouter()

  
  const [toggleShowPassword, setToggleShowPassword] = useState<boolean>(false)
  const [form, setForm] = useState<any>({
    email: '',
    password: '',
  })

  const handleChangeForm = (e: any) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const handleSaveAction = async (e: any) => {
        e.preventDefault()
        try {
            const {data} = await postData('/login', form)
            toast.success('Login berhasil !', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            localStorage.setItem("user", JSON.stringify(data.user.item))
            setCookie('token', data.user.item.token)
            router.push('/')
        } catch (error) {
            toast.error('Login gagal!', {
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
    <div className="w-full h-dvh p-4 sm:p-6 flex items-center bg-white sm:bg-zinc-100 justify-center relative">
      <div className="sm:border sm:p-10 w-full sm:w-fit rounded-md sm:bg-white">
        <Link href={"/"} className="logo-title flex w-full justify-center">
            <div className="text-pink-600">Ruang</div>
            <div className="text-blue-600">Cerpen</div>
        </Link>
        <form onSubmit={handleSaveAction} className='w-full flex flex-col gap-4 mt-9 sm:w-[350px]'>
          <div className="w-full">
                  <TextInput 
                  name="email"
                  type="email"
                  value={form?.email}
                  placeholder="Email"
                  onChange={(e: any) => handleChangeForm(e)}
                  className="text-sm py-2 w-full" />
              </div>
          <div className="w-full relative">
                  <TextInput 
                  type={toggleShowPassword ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={form?.password}
                  onChange={(e: any) => handleChangeForm(e)}
                  className="text-sm py-2 w-full" />
                  <div className="absolute top-0 right-0 flex h-full items-center mr-3 opacity-70 cursor-pointer" onClick={() => setToggleShowPassword(!toggleShowPassword)}>
                      {!toggleShowPassword ? (
                          <EyeClosedIcon />
                          ): (
                          <EyeIcon />
                      )}
                  </div>
              </div>
          <Button type="submit" content="Login" className="mt-5" />
          <div className="font-normal text-sm mt-3">Belum punya akun? <Link href={"/pages/auth/register"} className='font-medium text-sm text-blue-600'>Buat akun disini</Link></div>
        </form>
      </div>
    </div>
  )
}

export default Login
