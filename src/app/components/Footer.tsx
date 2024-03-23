import React from 'react'
import TextInput from './TextInput'
import Button from './Button'

const Footer = () => {
    return (
        <div className='w-full flex flex-col sm:flex-row justify-around px-4 sm:px-0 py-4 sm:py-10 items-start gap-3 sm:gap-0 border-t'>
            <div className="flex">
                <div className="text-pink-600">Ruang</div>
                <div className="text-blue-600">Cerpen</div>
            </div>
            <div className="flex flex-col w-full sm:w-fit items-end gap-5">
                <div className="flex w-full sm:w-fit">
                    <TextInput />
                    <Button content="Subscribe" className="rounded-none border border-blue-500" />
                </div>
                <div className="flex items-center gap-1 w-full justify-center sm:justify-end">
                    <span className='text-lg mt-[1px]'>©</span>
                    <div className="text-sm">2024 RuangCerpen. Collab Project</div>    
                </div>
            </div>
        </div>
  )
}

export default Footer