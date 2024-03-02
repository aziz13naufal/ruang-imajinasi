"use client"
import React, { Component, useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Navbar from '@/app/components/Navbar2';
import UserIcon from '@/app/components/icon/user';
import CalendarIcon from '@/app/components/icon/calendar';
import { useSearchParams } from 'next/navigation';
import { getData } from '@/utils/fetch';


const CreateStory = () => {
    const searchParams = useSearchParams();
    const slug = searchParams.get('slug')

    const [story, setStory] = useState<any>('')

    useEffect(() => {
        const getDetailStory = async () => {
            try {
                const {data} = await getData(`/story/${slug}`)
                setStory(data?.story?.item)
            } catch (error) {}
        }
        getDetailStory()
    }, [slug])


  return (
    <div className='w-full h-full p-4 sm:p-6 flex justify-center bg-bg-primary relative'>
        <section className='w-full lg:w-[800px] h-full relative'>
            <Navbar />
            <main className='mt-7 sm:mt-10 flex flex-col w-full'>
                <div className="title">
                    <div className="text-2xl">{story?.title}</div>
                </div>
                <div className="author flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1">
                        <div className=""><UserIcon /></div>
                        <div className="text-sm">Aziz Naufal</div>
                    </div>

                    <div className="flex items-center gap-1">
                        <div className=""><CalendarIcon /></div>
                        <div className="text-sm">1 Hari yang lalu</div>
                    </div>

                </div>

                <div className="image-story mt-5">
                    <img src='/images/eifel.png' alt='thumbnail' className='w-full h-[300px] object-cover rounded-md border-2 border-orange-700' /> 
                </div>

                <div className="text-content mt-7 text-base">
                    {story?.content}
                </div>
            </main>
        </section>
    </div>
  )
}

export default CreateStory
