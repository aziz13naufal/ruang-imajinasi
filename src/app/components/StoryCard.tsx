import React from 'react'
import EyeglassIcon from './icon/eyeglass'
import LoveIcon from './icon/love'
import CommentIcon from './icon/comment'

const StoryCard = ({ title, content }: any) => {
    return (
        <div className="w-full h-[190px] bg-zinc-100 rounded-md shrink-0 p-2 flex gap-2 cursor-pointer drop-shadow">
            <img src="/images/eifel.png" className="w-[120px] h-full bg-white rounded-md shrink-0 object-cover" />
            <div className="flex flex-col justify-between w-full h-full gap-1 lg:gap-2">
                <div className="w-full h-full overflow-hidden">
                    <div className="text-sm font-semibold">{title}</div>
                    {/* <div className="text-xs mt-1">{content}</div> */}
                    <div className="small-text text-xs mt-1" dangerouslySetInnerHTML={{ __html: content }} />
                </div>
                <div className="flex w-full justify-between">
                    <div className="flex gap-1 items-center">
                        <EyeglassIcon />
                        <div className="text-xs">0</div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <LoveIcon />
                        <div className="text-xs">0</div>
                    </div>
                    <div className="flex gap-1 items-center">
                        <CommentIcon />
                        <div className="text-xs">0</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StoryCard