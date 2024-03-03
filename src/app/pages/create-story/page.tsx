"use client"
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'
import TextInput from '@/app/components/TextInput';
import SelectInput from '@/app/components/SelectInput';
import CKeditorInput from '@/app/components/CKEditor';
import dynamic from "next/dynamic";
import { getData } from '@/utils/fetch';
import Select from 'react-select';
import Button from '@/app/components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/app/components/Footer';

const CreateStory = () => {
    const Editor = dynamic(() => import("@/app/components/CKEditor"), { ssr: false });
    const [editorLoaded, setEditorLoaded] = useState(false);
    const [data, setData] = useState("");
    const [categoryData, setCategoryData] = useState<any[]>([]);

    const getDataCategory = async () => {
        try {
            const {data} = await getData('/category')
            setCategoryData(data?.categories?.items)
        } catch (error) {
        }
    }

    useEffect(() => {
        setEditorLoaded(true);
        getDataCategory();
    }, []);

    const categoryOption = categoryData?.map(item => ({
        label: item?.name,
        value: item?.id,
    }));

    const handleSaveAction = async () => {

    }

    return (
        <div className='w-full relative'>
            <div className="h-16">
                <Navbar />
            </div>


            <div className="w-full flex justify-center bg-zinc-100">
                <div className="w-full lg:w-[1000px] p-3 border-l border-r bg-white flex flex-col gap-7">
                    {/* form */}
                    <form className="w-full flex flex-col gap-4">
                        {/* input title */}
                        <div className="">
                            <label htmlFor="" className='text-sm'>Judul Cerita</label>
                            <TextInput />
                        </div>

                        {/* input category */}
                        <div className="z-20">
                            <label htmlFor="" className='text-sm'>Jenis Kategori</label>
                            {/* <SelectInput /> */}
                             <Select
                                className="basic-single"
                                classNamePrefix="select"
                                // defaultValue={}
                                placeholder=""
                                name="color"
                                options={categoryOption}
                                styles={{
                                    control: (baseStyles, state) => ({
                                    ...baseStyles,
                                    borderRadius: '0px',
                                    border: '1px solid #cecfd1',
                                    }),
                                }}
                            />
                        </div>
                        
                        {/* input content */}
                        <div className="">
                            <label htmlFor="" className='text-sm'>Isi Cerita</label>
                            <Editor
                                name="description"
                                onChange={(e) => {
                                    console.log(e)
                                }}
                                editorLoaded={editorLoaded}
                                value=''
                            />
                        </div>

                        {/* submit button */}
                        <div className="w-full flex justify-end mt-4">
                            <Button content="Buat Cerita" className="w-full" />
                        </div>
                    </form>
                </div>
            </div>

            <div className="">
                <Footer />
            </div>
        </div>
  )
}
export default CreateStory
