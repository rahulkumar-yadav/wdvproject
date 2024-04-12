import React from 'react'
import {RiArrowRightSLine} from '@remixicon/react'

const Tags = () => {

    const tagBox = (text) => {
        return <div className='px-[10px] font-medium py-1 text-[13px] text-[#4C82EF] rounded-md bg-[#F2F7FF] border-[1px] border-[#4C82EF]'>{text}</div>
    }
    
  return (
    <div className='mt-10 w-[92%] mx-auto relative'>
                    <div className='absolute -right-1 top-8'><RiArrowRightSLine color='#4C82EF' size={27} /></div>
                    <p className='text-gray-400 text-sm'>Popular tags for handbag</p>
                    <div className='flex w-[92%] overflow-hidden mt-3 gap-2 whitespace-nowrap'>
                        {tagBox('Clutch')}
                        {tagBox('Fabric lining')}
                        {tagBox('Baggit')}
                        {tagBox('Multi Compartment')}
                    </div>
                </div>
  )
}

export default Tags