"use client"
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Navbar from '@/app/components/Navbar';

const CreateStory = () => {
  return (
    <div className='w-full h-full p-4 sm:p-6 flex justify-center bg-bg-primary relative'>
      <section className='w-full lg:w-[800px] h-full relative'>
          {/* <Navbar /> */}
      <main className='mt-20 flex flex-col w-full gap-y-20'>
        <form action="" className='flex flex-col gap-y-5'>
          <div className="flex flex-col">
            <label htmlFor="title">Judul</label>
            <input type="text" className='border border-zinc-300' />
          </div>

          <div className="">
            <CKEditor
              editor={ ClassicEditor }
              data=""
              onChange={ ( event, editor ) => {
                console.log( editor.getData() );}}
            />
          </div>
        </form>
      </main>
      </section>
    </div>
  )
}

export default CreateStory
