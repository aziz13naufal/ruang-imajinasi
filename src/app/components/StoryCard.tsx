import React from 'react'
import LoveIcon from './icon/love'
import CommentIcon from './icon/comment'

const StoryCard = () => {
  return (
    <div>
        <div className="p-2 border-2 border-zinc-700 hover:border-pink-500 rounded-md cursor-pointer smooth-animation bg-bg-primary">
            <img src="/images/eifel.png" alt="story-card" className="bg-zinc-300 h-36 w-full object-cover rounded-[4px]" />
            <div className="mt-2 w-full flex justify-between">
                <div className="">The Eiffel Tower</div>
                <div className="text-xs font-normal">1 Hari yang lalu</div>
            </div>
            
            <div className="text-base font-normal">It was for the 1889 Exposition Universelle, the date that marked the 100th anniversary of the French...</div>
            
            <div className="w-full border-t border-zinc-700 my-2"></div>
        
            <div className="flex items-center justify-between">
                <div className="flex gap-[7px] items-center">
                    <div className="w-5 h-5 rounded-full bg-zinc-200 border border-zinc-700"></div>
                    <div className="text-sm font-normal">Aziz Naufal</div>
                </div>
                <div className="flex gap-1">
                    <LoveIcon /><span className="text-sm font-medium mt-[1px]">0</span>
                    <CommentIcon /><span className="text-sm font-medium mt-[1px]">0</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StoryCard
