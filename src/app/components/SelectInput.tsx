"use client"
import React, { useState } from 'react'
import ArrowDownIcon from './icon/arrow-down'

const SelectInput = () => {

    const [toggleInput, setToggleInput] = useState<boolean>(false)
    const [valueId, setValueId] = useState<any>()
    const [valueName, setValueName] = useState<any>()

    const options = [
        {
            id: 1,
            name: 'One'
        },
        {
            id: 2,
            name: 'Two'
        }
    ]

    return (
        <div className="relative">
            <div className="absolute top-0 right-0 bottom-0 h-full flex items-center mr-2 scale-75 opacity-50">
                <ArrowDownIcon />
            </div>
            <div className='w-full border border-[#cecfd1] px-2 outline-none focus:border-blue-600 focus:shadow-inner h-10 flex items-center cursor-pointer' onClick={() => setToggleInput(!toggleInput)}>{valueName}</div>

            {/* Options */}
            <div className={`absolute top-0 left-0 right-0 w-full mt-12 border border-[#cecfd1] z-10 bg-white flex flex-col ${!toggleInput && 'hidden'}`}>
                {options?.map((item: any, index: any) => (
                    <div className="" key={index}>
                        <div className="border-b py-1 hover:bg-zinc-100 px-2 cursor-pointer" onClick={() => {
                            setToggleInput(false)
                            setValueName(item?.name)
                        }}>{item?.name}</div>
                    </div>
                ))}
            </div>
        </div>
  )
}
export default SelectInput

