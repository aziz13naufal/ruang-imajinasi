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


const Home = () => {

    // useState
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [indicator, setIndicator] = useState<boolean>(false);
    const [page, setPage] = useState<any>(1);
    const [limit, setLimit] = useState<any>(4);
    const [paginationData, setPaginationData] = useState<any>({})
    const [search, setSearch] = useState<any>("");

    const [categoryData, setCategoryData] = useState<any>();
    const [storyData, setStoryData] = useState<any>();
    
    const [categoryTitle, setCategoryTitle] = useState<any>();
    const [categoryId, setCategoryId] = useState<any>();

    // useEffect
    useEffect(() => {
        const getDataCategory = async () => {
            try {
                setIsLoading(true)
                const {data} = await getData('/category')
                setCategoryData(data.categories.items)
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        }
        getDataCategory();
    }, [])

    useEffect(() => {
        const getDataStory = async () => {
            try {
                setIsLoading(true)
                const {data} = await getData('/story', { page: page, limit: limit, q: search, category_id: categoryId })
                setStoryData(data.stories.items)
                console.log({
                    totalItems: data.pagination.total_items,
                    totalPages: data.pagination.total_pages,
                    currentPage: data.pagination.current_page,
                    limit: data.pagination.limit,
                })
                setPaginationData({
                    totalItems: data.pagination.total_items,
                    totalPages: data.pagination.total_pages,
                    currentPage: data.pagination.current_page,
                    limit: data.pagination.limit,
                })
                setIsLoading(false)
            } catch (error) {
                setIsLoading(false)
            }
        }
        getDataStory();
    }, [page, limit, search, categoryId])

    return (
        <div className='w-full'>
            <div className="w-full flex justify-between border h-16 items-center px-7">
                <div className="left-side flex gap-7">
                    <div className="logo-title flex">
                        <div className="text-pink-600">Ruang</div>
                        <div className="text-blue-600">imajinasi</div>
                    </div>
                    <div className="menu flex gap-5 items-center">
                        <div className="text-sm">Beranda</div>
                        <div className="text-sm">Tentang Kami</div>
                    </div>
                </div>

                <div className="right-side flex items-center">
                    <div className="text-sm">right side</div>
                </div>
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
                        }}>
                            <img src="/images/eifel.png" alt="category" className='w-full h-full object-cover' />
                            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-gradient-to-t from-[rgba(89,89,89,0.7)] via-transparent to-transparent hover:opacity-0 cursor-pointer text-white smooth-animation">{item?.name}</div>
                        </SwiperSlide>
                    ))}
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
                                <div className="w-full h-[190px] bg-zinc-100 rounded-md shrink-0 p-2 flex gap-2 cursor-pointer drop-shadow" key={index}>
                                    <img src="/images/eifel.png" className="w-[120px] h-full bg-white rounded-md shrink-0 object-cover" />
                                    <div className="flex flex-col justify-between w-full h-full gap-1 lg:gap-2">
                                        <div className="w-full h-full overflow-hidden">
                                            <div className="text-sm font-semibold">{item?.title}</div>
                                            <div className="text-xs mt-1">{item?.content}</div>
                                        </div>
                                        <div className="flex w-full justify-between">
                                            <div className="flex gap-1 items-center">
                                                <EyeglassIcon />
                                                <div className="text-xs">0</div>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <LoveIcon />
                                                <div className="text-xs">0</div>
                                            </div>
                                            <div className="flex gap-1 items-center">
                                                <CommentIcon />
                                                <div className="text-xs">0</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="w-full h-[190px] flex flex-col gap-3 items-center justify-center">
                                <button className={`w-28 h-fit rounded-md bg-blue-500 text-white px-4 py-2 drop-shadow text-sm outline-none 
                                ${paginationData?.limit >= paginationData?.totalItems && 'hidden'}
                                `}
                                onClick={() => setLimit(limit + 4)}>Muat Lebih</button>
                                <button className={`w-28 h-fit rounded-md bg-pink-500 text-white px-4 py-2 drop-shadow text-sm outline-none 
                                ${paginationData?.limit <= 4 && 'hidden'}
                                `}
                                onClick={() => setLimit(4)}>Muat Sedikit</button>
                            </div>
                        </div>
                    </div>

                    {/* Create Story */}
                    <div className="w-full">
                        a
                    </div>
                </div>

            </div>
        </div>
  )
}
export default Home

