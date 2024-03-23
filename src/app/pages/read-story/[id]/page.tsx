"use client"
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'

import { useParams } from 'next/navigation'
import { getData } from '@/utils/fetch'
import { toast } from 'react-toastify'

const ReadStory = () => {
    const params = useParams()
    console.log(params)

    const [storyData, setStoryData] = useState<any>(null)

    useEffect(() => {
        const getDataDetailStory = async () => {
            try {
                const { data } = await getData(`/story/${params.id}`)
                console.log(data.story.item)
                setStoryData(data.story.item)
            } catch (error) {
                toast.error('Gagal mendapatkan data!', {
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
        getDataDetailStory()
    }, [params])

    return (
        <div className='w-full relative'>
            <div className="h-16">
                <Navbar />
            </div>

            <div className="w-full flex justify-center bg-zinc-100">
                <div className="w-full lg:w-[1000px] p-3 border-l border-r bg-white flex flex-col gap-7">
                    <div className="w-full">
                        <img src={storyData?.image ? storyData?.image : '/images/eifel.png'} alt="category" className='w-full h-[300px] object-cover rounded-md' />
                    </div>

                    {/* title */}
                    <div className="w-full">
                        <div className="w-full text-center">
                            <div className="">{storyData?.title}</div>
                            <div className="text-xs"> dibuat oleh: default</div>
                        </div>
                    </div>

                    {/* content */}
                    <div className="w-full flex flex-col gap-3 p-6 bg bg-blue-600/10 border-2 border-blue-600 border-dashed rounded-md">
                        <div dangerouslySetInnerHTML={{ __html: storyData?.content }} />
                    </div>
                </div>
            </div>

            {/* footer */}
            <Footer />
        </div>
    )
}

export default ReadStory
