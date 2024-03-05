"use client"
import Navbar from '@/app/components/Navbar'
import React, { useEffect, useState } from 'react'
import TextInput from '@/app/components/TextInput';
import SelectInput from '@/app/components/SelectInput';
import CKeditorInput from '@/app/components/CKEditor';
import dynamic from "next/dynamic";
import { getData, postData } from '@/utils/fetch';
import Select from 'react-select';
import Button from '@/app/components/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/app/components/Footer';
import SuccessAlert from '@/app/components/alert/success-alert';
import ErrorAlert from '@/app/components/alert/error-alert';
import { useRouter } from 'next/navigation';
import axios from 'axios';
const Editor = dynamic(() => import("@/app/components/CKEditor"), { ssr: false });

const CreateStory = () => {

    const router = useRouter()

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

    const [form, setForm] = useState({
        category_id: '',
        title: '',
        content: '',
    })

    console.log(form)

    const handleChangeForm = (e: any) => {
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    const handleSaveAction = async (e: any) => {
        e.preventDefault()
        try {
            // await postData('/story', form)
            await axios.post('https://cerpen.titik.my.id/api/story', {
                category_id: form?.category_id,
                title: form?.title,
                content: form?.content
            })
            toast.success('Cerita berhasil dibuat!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            // router.push('/pages/indexTemp')
        } catch (error) {
            toast.error('Cerita gagal dibuat!', {
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

    return (
        <div className='w-full relative'>
            <div className="h-16">
                <Navbar />
            </div>


            <div className="w-full flex justify-center bg-zinc-100">
                <div className="w-full lg:w-[1000px] p-3 border-l border-r bg-white flex flex-col gap-7">
                    {/* form */}
                    <form onSubmit={handleSaveAction} className="w-full flex flex-col gap-4">
                        {/* input title */}
                        <div className="">
                            <label htmlFor="" className='text-sm'>Judul Cerita</label>
                            <TextInput
                            name="title"
                            onChange={(e: any) => handleChangeForm(e)}
                            />
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
                                onChange={(e) => setForm({...form, category_id: e?.value})}
                                name="category_id"
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
                                    setForm({...form, content: e})
                                }}
                                editorLoaded={editorLoaded}
                                value=''
                            />
                        </div>

                        {/* input image */}
                        {/* <div className="">
                            <label htmlFor="" className='text-sm'>Gambar</label>
                            <TextInput
                            name="image"
                            onChange={(e: any) => handleChangeForm(e)}
                            />
                        </div> */}

                        {/* submit button */}
                        <button type='submit' className="w-full flex justify-end mt-4">
                            <Button content="Buat Cerita" className="w-full"  />
                        </button>
                    </form>
                </div>
            </div>
            <div className="text-white">
                <ToastContainer />
            </div>
            <div className="">
                <Footer />
            </div>
        </div>
  )
}
export default CreateStory
