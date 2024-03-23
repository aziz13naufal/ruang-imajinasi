import React from 'react'
import EyeglassIcon from './icon/eyeglass'
import LoveIcon from './icon/love'
import CommentIcon from './icon/comment'

const StoryCardSkeleton = ({title, content}: any) => {
    return (
        <div className="w-full h-[190px] bg-zinc-100 rounded-md shrink-0 p-2 flex gap-2">
            <div className="w-[120px] h-full bg-zinc-200 rounded-md shrink-0 object-cover animate-pulse"></div>
            <div className="flex flex-col justify-between w-full h-full gap-1 lg:gap-2">
                <div className="w-full h-full overflow-hidden flex flex-col gap-2">
                    <div className="w-1/3 p-2 rounded-md bg-zinc-200 animate-pulse"></div>
                    <div className="w-[70%] p-2 rounded-md bg-zinc-200 animate-pulse"></div>
                    <div className="w-[50%] p-2 rounded-md bg-zinc-200 animate-pulse"></div>
                    <div className="w-[70%] p-2 rounded-md bg-zinc-200 animate-pulse"></div>
                </div>
                <div className="flex w-full justify-between">
                    <div className="flex gap-1 items-center w-full p-2 rounded-md bg-zinc-200 animate-pulse">
                    </div>
                </div>
            </div>
        </div>
  )
}

export default StoryCardSkeleton