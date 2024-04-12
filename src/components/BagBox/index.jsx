import React from 'react'
import {RiArrowRightSLine} from '@remixicon/react'

const BagBox = () => {
  return (
    <div className='w-[90%] mx-auto mt-6 relative'>
                    <div className='absolute text-[11px] text-gray-500 top-36 left-2 font-medium'>4:48 PM</div>
                    <div className='w-[250px] h-[140px] p-2 rounded-2xl bg-box-gradient'>
                        <div className='bg-white rounded-xl px-2 py-2 items-center flex gap-4'>
                            <img className='h-12 rounded-md' src="./bag.jpeg" alt="" />
                            <div className='flex flex-col gap-2'>
                                <p className='text-sm'>Bags on <span className='font-medium'>Timpu</span></p>
                                <div className='flex gap-4 items-center'>
                                    <span className='text-[12px] text-gray-400'>1123 products</span>
                                    <RiArrowRightSLine size={25} color='gray' />
                                </div>
                            </div>
                        </div>
                        <p className='mt-2 text-[13px] leading-5'>
                            Or set filter and help us choose the best bag for you.
                        </p>
                    </div>
                </div>
  )
}

export default BagBox