import React from 'react'
import { RiEqualizerLine, RiCloseFill } from '@remixicon/react'

const Filters = () => {

    const filterBox = (text) => {
        return <div className='px-[10px] flex gap-1 items-center font-medium py-[1px] text-[13px] text-[#737373] rounded-md bg-[#F4F4F4]'>
            <p>{text}</p>
            <span><RiCloseFill size={20} /></span>
        </div>
    }

    return (
        <div className='w-[90%] mx-auto my-8'>
            <div className='flex justify-between'>
                <p className='text-sm text-gray-400'>Select Filters</p>
                <div className='flex items-center'>
                    <span><RiEqualizerLine color='gray' size={23} /></span>
                    <span className='text-sm text-gray-400'>Filter</span>
                </div>
            </div>

            <div className='flex gap-2 mt-2 whitespace-nowrap flex-wrap'>
                <div className='px-[10px] flex gap-1 items-center py-[1px] text-[13px] text-[#4C82EF] rounded-md bg-[#F2F7FF] border-[1px] border-[#4C82EF]'>
                    <p>Strap - Long</p>
                    <span><RiCloseFill size={20} /></span>
                </div>
                {filterBox('Colour')}
                {filterBox('Size')}
                {filterBox('Brand')}
                {filterBox('Material')}
            </div>
        </div>
    )
}

export default Filters