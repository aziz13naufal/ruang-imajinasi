import Image from "next/image"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ThumbsUpIcon from "./components/icon/thumbs-up"
import CommentIcon from "./components/icon/comment"
import LoveIcon from "./components/icon/love"
import StoryCard from "./components/StoryCard"
import React from 'react';
import dynamic from 'next/dynamic';

const Home = () => {
  return (
    <div className="w-full h-full p-4 sm:p-6 flex justify-center bg-bg-primary relative">
      <section className="w-full lg:w-[800px] h-full relative">
          <Navbar />
          <Header />

        <main className="mt-20 flex flex-col w-full gap-y-20">
          {/* category */}
          <div className="flex flex-col gap-y-6">
            {/* category title */}
            <div className="w-full flex justify-between items-start">
              <div className="">Pilih Kategori Cerpen Yang Cocok Untukmu</div>
              <div className="border-2 border-pink-500 rounded-md px-2 text-base font-normal text-pink-500 ">Lihat Semua</div>
            </div>

            {/* category item */}
            <div className="flex w-full items-center gap-6">
              <div className="flex flex-col gap-3 items-center transition active:scale-110">
                <img src="/images/eifel.png" alt="category" className="w-20 h-20 border-2 border-zinc-700 sm:hover:border-pink-500 cursor-pointer rounded-full object-cover" />
                <div className="">Fantasi</div>
              </div>
              <div className="flex flex-col gap-3 items-center transition active:scale-110">
                <img src="/images/eifel.png" alt="category" className="w-20 h-20 border-2 border-zinc-700 sm:hover:border-pink-500 cursor-pointer rounded-full object-cover" />
                <div className="">Fantasi</div>
              </div>
              <div className="flex flex-col gap-3 items-center transition active:scale-110">
                <img src="/images/eifel.png" alt="category" className="w-20 h-20 border-2 border-zinc-700 sm:hover:border-pink-500 cursor-pointer rounded-full object-cover" />
                <div className="">Fantasi</div>
              </div>
            </div>
          </div>

          {/* best short story */}
          <div className="flex flex-col gap-y-6">
            {/* best short story title */}
            <div className="">Rekomendasi Cerpen Untukmu</div>

            {/* best short story card */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <StoryCard />
              <StoryCard />
              <StoryCard />
              <StoryCard />
            </div>
              {/* see more */}
              <div className="w-full flex justify-center mt-6">
                <div className="border-2 border-pink-500 rounded-md px-2 text-base font-normal text-pink-500 ">Muat Lebih</div>
              </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default Home