"use client"
import Navbar from '@/app/components/Navbar'
import React from 'react'

const ReadStory = () => {
    return (
        <div className='w-full relative'>
            <div className="h-16">
                <Navbar />
            </div>

            <div className="w-full flex justify-center bg-zinc-100">
                <div className="w-full lg:w-[1000px] p-3 border-l border-r bg-white flex flex-col gap-7">
                    <div className="w-full">
                        <img src="/images/eifel.png" alt="category" className='w-full h-[300px] object-cover rounded-md' />
                    </div>

                    {/* title */}
                    <div className="w-full">
                        <div className="w-full text-center">
                            <div className="">Penantian di Bawah Pohon Cemara</div>
                            <div className="text-xs"> dibuat oleh: Aziz Naufal</div>
                        </div>
                    </div>

                    {/* content */}
                    <div className="w-full flex flex-col gap-3 p-6 bg bg-blue-600/10 border-2 border-blue-600 border-dashed rounded-md">
                        <div className="text-sm">Di sebuah desa kecil yang dikelilingi oleh hutan pinus yang rimbun, hiduplah seorang pemuda bernama Rama. Rama adalah seorang pemuda yang santai dan suka menjelajahi hutan-hutan sekitar desanya. Suatu hari, ketika sedang berjalan-jalan di hutan, Rama bertemu dengan seorang gadis muda yang sedang duduk di bawah pohon cemara.</div>

                        <div className="text-sm">Gadis itu memiliki senyuman manis yang membuat hati Rama tersentuh. Mereka pun mulai berbincang-bincang dan saling mengenal satu sama lain. Gadis itu bernama Sita, dan dia tinggal di desa sebelah yang terpisah oleh hutan pinus ini.</div>

                        <div className="text-sm">Setiap hari setelah itu, Rama dan Sita bertemu di bawah pohon cemara itu. Mereka saling berbagi cerita, tawa, dan harapan. Rama merasa bahwa hidupnya telah berubah sejak bertemu dengan Sita. Dia merasa lebih bersemangat dan memiliki motivasi yang lebih besar untuk menjelajahi dunia di luar desanya.</div>

                        <div className="text-sm">Namun, suatu hari, Sita menghilang. Rama mencari-cari Sita ke setiap sudut desa tetapi tidak menemukannya. Dia merasa kehilangan dan hampa tanpa kehadiran Sita. Rama kemudian memutuskan untuk menunggu di bawah pohon cemara tempat mereka sering bertemu, dalam harapan bahwa suatu hari Sita akan kembali.</div>

                        <div className="text-sm">Hari berganti hari, musim berganti musim, namun Sita tidak kunjung kembali. Rama tetap setia menunggu di bawah pohon cemara itu, tanpa kehilangan harapan. Hingga suatu hari, ketika matahari mulai terbenam, dia melihat sosok yang dikenalinya dengan baik datang ke arahnya.</div>

                        <div className="text-sm">Itu adalah Sita, dengan senyuman manisnya yang membuat hati Rama mekar kembali. Mereka berpelukan erat, dan Rama merasa bahwa penantian panjangnya akhirnya berbuah manis. Mereka kembali duduk di bawah pohon cemara itu, bercerita tentang perjalanan mereka selama bertahun-tahun terpisah.</div>

                        <div className="text-sm">Dari cerita mereka, Rama belajar bahwa Sita telah pergi untuk menemui ibunya yang sakit di desa lain. Dan sejak saat itu, Rama dan Sita tidak pernah terpisah lagi. Mereka hidup bahagia di desa kecil itu, di bawah naungan pohon cemara yang menyaksikan kisah cinta mereka yang tulus dan abadi.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadStory
