"use client"

import Button from '@/app/components/Button'
import TextInput from '@/app/components/TextInput'
import EyeClosedIcon from '@/app/components/icon/eye-closed'
import EyeIcon from '@/app/components/icon/eye-icon'
import { postData } from '@/utils/fetch'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Register = () => {

    const router = useRouter()

    const [toggleShowPassword, setToggleShowPassword] = useState<boolean>(false)
    const [toggleShowPassword2, setToggleShowPassword2] = useState<boolean>(false)

    const [form, setForm] = useState<any>({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
    })

    const handleChangeForm = (e: any) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const handleSaveAction = async (e: any) => {
        e.preventDefault()
        try {
            await postData('/register', form)
            toast.success('Akun berhasil dibuat!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            router.push('/pages/auth/login')
        } catch (error) {
            toast.error('Akun gagal dibuat!', {
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
          <Link href={"/pages/indexTemp"} className="logo-title flex w-full justify-center">
              <div className="text-pink-600">Ruang</div>
              <div className="text-blue-600">Cerpen</div>
          </Link>
          <form onSubmit={handleSaveAction} className='w-full flex flex-col gap-4 mt-9 sm:w-[350px]'>
              <div className="w-full">
                  <TextInput 
                  name="name"
                  placeholder="Nama"
                  value={form?.name}
                            onChange={(e: any) => handleChangeForm(e)}
                  className="text-sm py-2 w-full" />
              </div>
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
              <div className="w-full relative">
                  <TextInput 
                  type={toggleShowPassword2 ? 'text' : 'password'}
                  name="confirm_password"
                  value={form?.confirm_password}
                  placeholder="Konfirmasi Password"
                  onChange={(e: any) => handleChangeForm(e)}
                  className="text-sm py-2 w-full" />
                  <div className="absolute top-0 right-0 flex h-full items-center mr-3 opacity-70 cursor-pointer" onClick={() => setToggleShowPassword2(!toggleShowPassword2)}>
                      {!toggleShowPassword2 ? (
                          <EyeClosedIcon />
                          ): (
                          <EyeIcon />
                      )}
                  </div>
              </div>
            <Button type="submit" content="Buat Akun" className="mt-5" />
            <div className="font-normal text-sm mt-3">Sudah punya akun? <Link href={"/pages/auth/login"} className='font-medium text-sm text-blue-600'>Masuk disini</Link></div>
          </form>
        </div>
      </div>
    )
}

export default Register
