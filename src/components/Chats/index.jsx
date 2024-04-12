import React from 'react'

const Chats = () => {
  return (
    <div className='pt-11 w-[90%] mx-auto'>
                    <div className='w-[250px] h-[80px] rounded-xl bg-box-gradient py-2 px-4 text-[14px] leading-5 tracking-wide relative'>
                        <div className='absolute text-[11px] text-gray-500 top-[84px] font-medium'>4:45 PM</div>
                        <p>Hi Sam! I am your personal shopping assistant, how can i help you today ?</p>
                    </div>
                    <div className='mt-10 w-[213px] h-[60px] ml-auto rounded-xl py-2 px-4 text-[14px] leading-5 tracking-wide bg-[#DCF7C5] relative'>
                        <div className='absolute text-[11px] text-gray-500 top-16 left-40 font-medium'>4:46 PM</div>
                        <p>I am looking for a hand bag, with long strap.</p>
                    </div>
                </div>
  )
}

export default Chats