"use client"

import React, { useEffect, useState } from 'react'

// icon
import CommentIcon from '@/app/components/icon/comment'
import EyeglassIcon from '@/app/components/icon/eyeglass'
import LoveIcon from '@/app/components/icon/love'

// component
// library
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// css
import 'swiper/css'
import 'swiper/css/pagination';
import { getData } from '@/utils/fetch'
import CrossIcon from '@/app/components/icon/cross-icon'
import StoryCard from '@/app/components/StoryCard'
import StoryCardSkeleton from '@/app/components/StoryCardSkeleton'
import Button from '@/app/components/Button'
import Navbar from '@/app/components/Navbar'
import Link from 'next/link'
import Footer from '@/app/components/Footer'


const Home = () => {

    // useState
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isLoadingStory, setIsLoadingStory] = useState<boolean>(false);
    const [isLoadingCategory, setIsLoadingCategory] = useState<boolean>(false);
    const [indicator, setIndicator] = useState<boolean>(false);
    const [page, setPage] = useState<any>(1);
    const [limit, setLimit] = useState<any>(4);
    const [paginationData, setPaginationData] = useState<any>({})
    const [search, setSearch] = useState<any>("");

    console.log(paginationData)

    const [categoryData, setCategoryData] = useState<any>();
    const [storyData, setStoryData] = useState<any>();
    
    const [categoryTitle, setCategoryTitle] = useState<any>();
    const [categoryId, setCategoryId] = useState<any>();

    // useEffect
    useEffect(() => {
        const getDataCategory = async () => {
            try {
                setIsLoading(true)
                setIsLoadingCategory(true)
                const {data} = await getData('/category')
                setCategoryData(data.categories.items)
                setIsLoading(false)
                setIsLoadingCategory(false)
            } catch (error) {
                setIsLoading(false)
                setIsLoadingCategory(false)
            }
        }
        getDataCategory();
    }, [])

    useEffect(() => {
        const getDataStory = async () => {
            try {
                setIsLoading(true)
                setIsLoadingStory(true)
                const {data} = await getData('/story', { page: page, limit: limit, q: search, category_id: categoryId })
                setStoryData(data.stories.items)
                setPaginationData({
                    totalItems: data.pagination.total_items,
                    totalPages: data.pagination.total_pages,
                    currentPage: data.pagination.current_page,
                    limit: data.pagination.limit,
                })
                setIsLoading(false)
                setIsLoadingStory(false)
            } catch (error) {
                setIsLoading(false)
                setIsLoadingStory(false)
            }
        }
        getDataStory();
    }, [page, limit, search, categoryId])

    return (
        <div className='w-full relative'>
            <div className="h-16">
                <Navbar />
            </div>


            <div className="w-full flex justify-center bg-zinc-100">
                <div className="w-full lg:w-[1000px] p-3 border-l border-r bg-white flex flex-col gap-7">
                    {/* category */}
                    <Swiper
                      slidesPerView={1}
                      spaceBetween={12}
                      pagination={{
                        clickable: true,
                      }}
                      breakpoints={{
                        640: {
                            slidesPerView: 2
                        },
                        1024: {
                            slidesPerView: 3
                        }
                      }}
                      modules={[Pagination]}
                      className="w-full h-[190px]"
                    >
                    {categoryData?.map((item: any, index: any) => (
                        <SwiperSlide className='relative w-fit h-fit rounded-md overflow-clip shrink-0 drop-shadow' key={index}
                        onClick={() => {
                            setCategoryId(item?.id)
                            setCategoryTitle(item?.name)
                            setLimit(4)
                        }}>
                            <img src="/images/eifel.png" alt="category" className='w-full h-full object-cover' />
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-t bg-[rgba(0,0,0,0.13)] hover:opacity-0 cursor-pointer text-white smooth-animation">{item?.name}</div>
                        </SwiperSlide>
                    ))}
                    {!categoryData && (<>
                        <SwiperSlide className='relative w-fit h-fit rounded-md overflow-clip shrink-0 drop-shadow animate-pulse'>
                            <div className='w-full h-full object-cover bg-zinc-200'></div>
                        </SwiperSlide>
                        <SwiperSlide className='relative w-fit h-fit rounded-md overflow-clip shrink-0 drop-shadow animate-pulse'>
                            <div className='w-full h-full object-cover bg-zinc-200'></div>
                        </SwiperSlide>
                        <SwiperSlide className='relative w-fit h-fit rounded-md overflow-clip shrink-0 drop-shadow animate-pulse'>
                            <div className='w-full h-full object-cover bg-zinc-200'></div>
                        </SwiperSlide>
                    </>)}
                    </Swiper>

                    {/* Story */}
                    <div className="w-full flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <div className="text-sm">{!categoryTitle ? "Baru Ditambahkan" : "Cerita Berdasarkan Kategori"}</div>
                            {categoryTitle && (
                                <div className=" bg-red-500 pl-2 pr-[2px] py-[2px] rounded-md flex items-center gap-3">
                                    <div className="text-sm text-white">{categoryTitle}</div>
                                    <div className="text-sm bg-white px-[6px] pb-[1px] rounded-[5px] text-red-500 cursor-pointer"
                                    onClick={() => {
                                        setCategoryTitle('')
                                        setCategoryId('')
                                    }}>x</div>
                                </div>
                            )}
                        </div>
                        <div className="gap-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                            {storyData?.map((item: any, index: any) => (
                                <div className="" key={index}>
                                    <StoryCard
                                    title={item?.title} 
                                    content={item?.content}
                                    />
                                </div>
                            ))}
                            {!storyData && (<>
                                <StoryCardSkeleton />
                                <StoryCardSkeleton />
                                <StoryCardSkeleton />
                                <StoryCardSkeleton />
                            </>)}
                            {!isLoadingStory && storyData && (
                            <div className={`w-full h-[190px] flex flex-col gap-3 items-center justify-center ${paginationData?.totalPages <= 1 && 'hidden'}`}>
                                <button className={`w-28 h-fit rounded-md bg-blue-500 text-white px-4 py-2 drop-shadow text-sm outline-none 
                                ${paginationData?.limit >= paginationData?.totalItems && 'hidden'}
                                `}
                                onClick={() => setLimit(limit + 4)}>Muat Lebih</button>
                                <button className={`w-28 h-fit rounded-md bg-pink-500 text-white px-4 py-2 drop-shadow text-sm outline-none 
                                ${paginationData?.limit <= 4 && 'hidden'}
                                `}
                                onClick={() => setLimit(4)}>Muat Sedikit</button>
                            </div>
                            )}
                        </div>
                    </div>

                    {/* Create Story */}
                    <div className="w-full flex flex-col gap-3">
                        <div className="text-sm">Ingin Membuat Cerita juga?</div>

                        <div className="w-full flex flex-col items-center justify-center bg-blue-200 border-2 border-blue-500 border-dashed rounded-md py-10 gap-6 p-4">
                            <div className="text-center text-base md:text-lg">Ayo Buat Cerita dan Tunjukkan kepada Orang Lain!</div>
                            <Link href={'/pages/create-story'} className="h-fit rounded-md bg-blue-500 text-white px-4 py-2 drop-shadow text-sm outline-none">Buat Cerita Sekarang</Link>
                        </div>
                    </div>
                </div>

            </div>

            <div className="w-full border-t">
                <Footer />
            </div>
        </div>
  )
}
export default Home

