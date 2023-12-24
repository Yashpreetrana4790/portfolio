import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='max-w-[1600px]  w-full py-[70px] mx-auto backimg'>

        <div className='flex mx-auto '>
          <div className='flex items-start gap-[100px] '>

            <Image alt="planet img" src="/images/planet.png" width={5075} height={2020} className='min-w-[570px] w-full' />
          </div>
          <div className='flex justify-end  pr-[180px] gap-[56px] w-full'>
            <div className=' flex items-start'>

              <h2 className='  w-full text-right text-[65px] font-black gradient leading-[77px]  '>Full-stack

                <br /> developer
                crafting
                <br />
                elegant.</h2>
            </div>
            <div>

              <Image src="/images/line.png" alt="line" width={100} height={100} className='max-w-[17px] ' />
            </div>
          </div>
        </div>
        <p className='text-center text-gray text-[24px] leading-[35px] pb-[30px] px-[180px]'>Hy I am <span className='font-bold'>Yashpreet Rana</span>  ,I believe in the magic of collaboration. My fluency in <span className='font-bold'>Next.js</span>, Express, Node, and MongoDB
          makes me a powerful technical partner.</p>
      </div>


    </>
  )
}

export default page