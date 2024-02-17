import React from 'react'

const Header = () => {
  return (
    <div className='w-full mt-14'>
      {/* title */}
      <div className="text-7xl sm:text-8xl font-bold text-pink-600 brightness-110 flex w-full justify-center lg:justify-start lg:px-36">Ruang</div>      
      <div className="text-7xl sm:text-8xl font-bold text-blue-600 brightness-110 flex w-full justify-center lg:justify-end lg:px-36">Imajinasi</div>      

      {/* subtitle */}
      <div className="mt-16 font-normal"><span className='font-medium'>Ruang Imajinasi membawa Anda melintasi berbagai dunia</span>, menjelajahi sudut-sudut hati dan pikiran yang mungkin belum pernah Anda kunjungi sebelumnya.</div>
      <div className="font-normal">Selamat datang di Ruang Imajinasi, tempat di mana kata-kata menjadi jendela ke dunia yang penuh keajaiban dan inspirasi.</div>
    </div>
  )
}

export default Header
