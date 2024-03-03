"use client"
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'
import TextInput from '@/app/components/TextInput';
import SelectInput from '@/app/components/SelectInput';
import CKeditorInput from '@/app/components/CKEditor';
import dynamic from "next/dynamic";

const CreateStory = () => {
    const Editor = dynamic(() => import("@/app/components/CKEditor"), { ssr: false });
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    useEffect(() => {
        setEditorLoaded(true);
    }, []);

    return (
        <div className='w-full relative'>
            <div className="h-16">
                <Navbar />
            </div>


            <div className="w-full flex justify-center bg-zinc-100">
                <div className="w-full lg:w-[1000px] p-3 border-l border-r bg-white flex flex-col gap-7">
                    {/* form */}
                    <form className="w-full flex flex-col gap-3">
                        <div className="">
                            <label htmlFor="" className='text-sm'>Judul Cerita</label>
                            <TextInput />
                        </div>

                        <div className="">
                            <label htmlFor="" className='text-sm'>Jenis Kategori</label>
                            <SelectInput />
                        </div>

                        <div className="">
                            <label htmlFor="" className='text-sm'>Isi Cerita</label>
                            <Editor
                                name="description"
                                onChange={(data) => {
                                setData(data);
                                }}
                                editorLoaded={editorLoaded}
                                value=''
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
  )
}
export default CreateStory
