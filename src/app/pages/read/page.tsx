"use client"
import React, { Component } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Navbar from '@/app/components/Navbar';
import UserIcon from '@/app/components/icon/user';
import CalendarIcon from '@/app/components/icon/calendar';

const CreateStory = () => {
  return (
    <div className='w-full h-full p-4 sm:p-6 flex justify-center bg-bg-primary relative'>
        <section className='w-full lg:w-[800px] h-full relative'>
            <Navbar />
            <main className='mt-7 sm:mt-10 flex flex-col w-full'>
                <div className="title">
                    <div className="text-2xl">The Eiffel Tower</div>
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
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio voluptate itaque numquam cum illo minus expedita reiciendis quasi, ullam facilis cumque praesentium sed nostrum quae eveniet obcaecati incidunt nisi neque perferendis commodi dignissimos debitis! Fugit iusto ab possimus similique omnis?</p>
                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, dignissimos impedit. Tempore ullam soluta eius. Quas laboriosam, culpa cum hic, fuga ipsam reprehenderit recusandae in neque repellendus corrupti consequuntur sapiente, pariatur earum praesentium. Obcaecati distinctio voluptatibus dicta voluptas quod ipsa itaque excepturi modi, autem, ea quo fugiat in, necessitatibus fuga omnis. Suscipit dicta eius itaque nobis harum ipsa maxime, odit laboriosam quam, hic eligendi repellat aliquam sequi quidem voluptate, non totam nulla possimus. Laboriosam impedit rerum dignissimos quasi, inventore deleniti tenetur eius, incidunt porro repellendus quia sint earum voluptate eaque animi nostrum suscipit aspernatur dolorem voluptatibus? Voluptates illum tempora, accusamus beatae quas accusantium asperiores error non ab nemo illo neque quia magnam dolorem temporibus nisi mollitia ad laudantium commodi fugit dolor maxime voluptas ipsam! Dolore nobis veritatis vel expedita sequi exercitationem voluptatum odio perspiciatis excepturi voluptatem eveniet totam amet qui voluptates, veniam non explicabo iste, officia sint, vero harum. Architecto error tempora facere eveniet nemo accusamus odio est similique provident officiis voluptas nisi pariatur reprehenderit minus veritatis, veniam ut, molestias placeat animi sequi debitis! Veniam soluta eveniet ipsa maxime nulla cupiditate, tempora ullam consequuntur atque unde vel blanditiis sapiente non inventore sunt illum doloremque assumenda, reiciendis nemo, praesentium fugiat cum?</p>
                </div>
            </main>
        </section>
    </div>
  )
}

export default CreateStory
