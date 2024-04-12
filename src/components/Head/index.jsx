import React from 'react'

const Head = () => {
  return (
    <div className='bg-[#EFF3FD] rounded-tl-3xl rounded-tr-3xl w-full h-[80px] py-3 px-[18px]'>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-3 relative'>
                            <img className='h-14 rounded-full' src="./robot.png" alt="" />
                            <div className='absolute top-11 left-11 w-2 h-2 rounded-full bg-[#3FE225]'></div>
                            <div className='flex flex-col gap-1'>
                                <span className='text-lg text-[#4C82EF] font-semibold'>Timpu</span>
                                <span className='text-[#4C82EF] text-md font-medium'>Chat assistant</span>
                            </div>
                        </div>

                        <div className='flex mt-7 gap-1 items-center'>
                            <div className='w-2 h-2 rounded-full bg-[#3FE225]'></div>
                            <span className='text-[#4C82EF] font-medium'>Online</span>
                        </div>
                    </div>
                </div>
  )
}

export default Head