import Image from 'next/image';
import React from 'react';
import Bell from '../../../../public/assets/Bell.svg'

const Hero = () => {
  return (
    <div className="">
        <div className="flex flex-row gap-12 px-8 justify-between border">
            <div className="flex items-center justify-center gap-12">
                <div className="flex gap-3 justify-center items-center">
                    <div className="flex items-center justify-center border-[5px] border-[#4F46E5] p-1">
                        <span className='text-[#4F46E5] font-extrabold text-sm '>B.T</span>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <span className='text-sm leading-5 font-medium'>Self On-Boarding</span>
                    <div className="bg-[#6366F1] w-full h-[2px]"></div>
                </div>
            </div>
            <div className="flex">
                <div className=" rounded-2xl p-4">
                    <Image src={Bell} alt='Bell' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;