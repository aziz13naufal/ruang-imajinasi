"use client"

import Image from "next/image"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import ThumbsUpIcon from "./components/icon/thumbs-up"
import CommentIcon from "./components/icon/comment"
import LoveIcon from "./components/icon/love"
import StoryCard from "./components/StoryCard"
import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { useRouter } from "next/navigation"
import { getData } from "@/utils/fetch"
import Link from "next/link"

const Home = () => {

  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isLoadingStory, setIsLoadingStory] = useState<boolean>(false)
  const [isLoadingCategory, setIsLoadingCategory] = useState<boolean>(false)
  const [indicator, setIndicator] = useState<boolean>(false)
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  
  const [story, setStory] = useState<any[]>([])
  const [storyPage, setStoryPage] = useState<any>("")
  const [category, setCategory] = useState<any[]>([])

  const [isCategoryClicked, setIsCategoryClicked] = useState<boolean>(false);
  const [categoryData, setCategoryData] = useState<any>()

  // get story
  useEffect(() => {
    const getDataStory = async () => {
      try {
        setIsLoadingStory(true)
        const {data} = await getData('/story', { page: page, limit: limit, category_id: categoryData?.id })
        setStory(data.stories.items)
        setStoryPage(data.pagination)
        setIsLoadingStory(false)
      } catch (error) {
        setIsLoadingStory(false)
      }
    }
    getDataStory()
  }, [page, limit, indicator, categoryData])

  // get category
  useEffect(() => {
    const getDataCategory = async () => {
      try {
        setIsLoadingCategory(true)
        const {data} = await getData('/category', { page: page, limit: limit })
        setCategory(data.categories.items)
        setIsLoadingCategory(false)
      } catch (error) {
        setIsLoadingCategory(false)
      }
    }
    getDataCategory()
  }, [page, limit, indicator])

  const handleMorePage = () => {
    setLimit(limit +  3)
    setIndicator(!indicator)
  }

  const handleLessPage = () => {
    setLimit(5)
    setIndicator(!indicator)
  }

  const handleClickCategory = (id?: string, title?: string) => {
    setIsCategoryClicked(true)
    console.log(id, title)
    setCategoryData({
      id, title
    })
  }

  return (
    <div className="w-full h-full p-4 sm:p-6 flex justify-center bg-bg-primary relative">
      <section className="w-full lg:w-[800px] h-full relative">
          <Navbar />
          <Header />
        <main className="mt-20 flex flex-col w-full gap-y-20">
          {/* category */}
          <div className="flex flex-col gap-y-6">
            <div className="">Pilih Kategori Cerpen Favoritmu</div>
            {/* category item */}
            <div className="flex w-full items-center gap-4 overflow-x-auto pt-3">
              {!isLoadingCategory && category?.map((item: any, index: any) => {
                return (
                  <div className="flex flex-col gap-3 items-center transition active:scale-95 shrink-0 relative" key={index}
                  onClick={() => handleClickCategory(item?.id, item?.name)}
                  >
                    <img src="/images/eifel.png" alt="category" className="w-32 h-40 border-2 border-zinc-700 sm:hover:border-pink-500 cursor-pointer rounded-md object-cover shrink-0" />
                    <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[rgba(63,63,70,0.7)] via-transparent to-transparent rounded-b-md hover:opacity-0 smooth-animation cursor-pointer"></div>
                    <div className="absolute bottom-0 left-0 mx-2 my-1 text-white font-normal">{item?.name}</div>
                  </div>
                )
              })}
              {/* loading skeleton */}
              {isLoadingCategory && (<>
                <div className="flex animate-pulse">
                  <div className="w-32 h-40 bg-[#b99d51] cursor-pointer rounded-md object-cover shrink-0" />
                </div>
                <div className="flex animate-pulse">
                  <div className="w-32 h-40 bg-[#b99d51] cursor-pointer rounded-md object-cover shrink-0" />
                </div>
              </>)}
            </div>
          </div>

          {/* best short story */}
          <div className="flex flex-col gap-y-6">
            {/* best short story title */}
            <div className="w-full flex items-center justify-between">
              <div className="">Rekomendasi Cerpen {isCategoryClicked ? categoryData?.title : "Untukmu"}</div>
                {isCategoryClicked && (
                  <button type='button' className="bg-orange-300 rounded-md px-3 py-[3px] border-2 border-orange-700 text-orange-700 cursor-pointer sm:hover:contrast-75 transition active:scale-95 whitespace-nowrap"
                  onClick={() => {
                    setIsCategoryClicked(false)
                    setCategoryData('')
                    setLimit(5)
                  }}
                  >Lihat Semua</button>
                )}
            </div>
            {isLoadingStory ? (
              <div className="w-full h-7 relative justify-center">
                  <div className="loading-animation mx-auto" />
              </div>
            ) : (<>
              {/* best short story card */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {story?.map((item: any, index: any) => {
                  return (
                    <Link href={{ pathname: '/pages/read/story', query: {slug: item?.slug} }} key={index}>
                      <StoryCard title={item?.title} subtitle={item?.content} />
                    </Link>
                  )})}
              </div>

              {/* see more */}
              {storyPage?.total_pages != 1 && 
               storyPage?.current_page != storyPage?.total_pages &&
              story.length >= 1 && (<>
                <div className="w-full flex justify-center mt-6 gap-3">
                  <button className="bg-orange-300 rounded-md px-3 py-[3px] border-2 border-orange-700 text-orange-700 cursor-pointer sm:hover:contrast-75 transition active:scale-95"
                  onClick={handleMorePage}
                  >Muat Lebih</button>

                  {limit > 5 && (
                    <button className="bg-orange-300 rounded-md px-3 py-[3px] border-2 border-orange-700 text-orange-700 cursor-pointer sm:hover:contrast-75 transition active:scale-95"
                    onClick={handleLessPage}
                    >Muat Sedikit</button>
                  )}
                </div>
                </>)}
            </>)}
          </div>
        </main>
      </section>
    </div>
  )
}

export default Home;