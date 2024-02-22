"use client"

import React from 'react'
import LoveIcon from './icon/love'
import CommentIcon from './icon/comment'

interface StoryProps {
    title: any;
    subtitle: any
}

const StoryCard = ({ title, subtitle }: StoryProps) => {
  return (
    <div className="p-2 border-2 border-zinc-700 sm:hover:border-pink-500 rounded-md cursor-pointer smooth-animation hover:ring-offset-2 active:ring-2 active:ring-orange-700 h-fit">
        <img src="/images/eifel.png" alt="story-card" className="bg-zinc-300 h-36 w-full object-cover rounded-[4px]" />
        <div className="mt-2 w-full flex justify-between">
            <div className="">{title && title.length <= 40 ? title : title.slice(0,40) + '...' }</div>
            <div className="text-xs font-normal text-end">1 Hari yang lalu</div>
        </div>
        
        <div className="text-base font-normal mt-2 mb-5">{subtitle && subtitle.length <= 150 ? subtitle : subtitle.slice(0,150) + '...' }</div>
        
        <div className="w-full border-t border-zinc-700 my-2"></div>
    
        <div className="flex items-center justify-between w-full relative">
            <div className="flex gap-[7px] items-center transition active:scale-95">
                <div className="w-5 h-5 rounded-full bg-zinc-200 border border-zinc-700"></div>
                <div className="text-sm font-normal">Aziz Naufal</div>
            </div>
            <div className="flex gap-1">
                <div className="transition active:scale-95">
                    <LoveIcon />
                </div>
                    <span className="text-sm font-medium mt-[1px]">0</span>
                <div className="transition active:scale-95">
                    <CommentIcon />
                </div>
                    <span className="text-sm font-medium mt-[1px]">0</span>
            </div>
        </div>
    </div>
  )
}

export default StoryCard
