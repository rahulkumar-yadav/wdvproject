import React from 'react'
import { RiArrowRightSLine, RiAttachment2 } from '@remixicon/react'


const FootInput = () => {
    return (
        <div className='w-full bg-box-gradient rounded-br-3xl rounded-bl-3xl h-[80px]'>
            <div className='w-[94%] flex mx-auto gap-1 items-center relative'>
                <div className='absolute top-4 right-20'><RiAttachment2 color='gray' /></div>
                <input className='w-[265px] px-5 py-2 mt-1.5 text-sm h-[40px] bg-white  rounded-md' type="text" placeholder='Type your message' />
                <button className='px-5 font-bold h-[40px] mt-1.5 bg-[#4C82EF] rounded-lg'><RiArrowRightSLine size={30} color='white' /></button>
            </div>

            <div className='w-full flex justify-center items-center text-[13px] text-gray-400'>
                <p>Powered by <span className='text-gray-500 font-semibold'>Krunk.ai</span></p>
                <img className='h-10 grayscale' src="./logo.png" alt="" />
            </div>
        </div>
    )
}

export default FootInput