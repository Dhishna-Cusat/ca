import React from 'react'

const Marquee = () => {
    return (
        <div className='bg-black marquee__group relative z-[2]'>
            <hr className='border-[#F6F6F6] border-2' />

            <marquee
                direction="right"
                behavior="scroll"
                loop="infinite"
            >
                <p className='text-[#F6F6F6] font-bold text-[28px]'>
                DHISHNA•DHISHNA•
                </p>
            </marquee>
            <hr className='border-[#F6F6F6] border-2' />
        </div>
    )
}

export default Marquee