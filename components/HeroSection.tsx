import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



const HeroSection: React.FC = () => {
  return (
    <div className='relative '>

      <div className='container mx-auto  padding-md'>
        <div className='mt-[120px] mb-[90px]' >
          <div>
            <h1 className='text-center text-[45px] sm:text-[73px] font-greatvibes '>Striving <span className='text-primary'>Programmer</span></h1>
          </div>
          <div className='flex justify-center items-center mb-8'>
            <Image src={"/images/herocard.svg"} alt="hero" width={100} height={100} className='max-w-[500px] max-height-[374px] w-full h-full' />

          </div>
          <div>
            <p className='text-center text-[17px]'>Hey, I&lsquo;m Yashpreet Rana, an independent programmer. <br /> Keeping up with the latest tech is my jam 🚀, so you can count on me to bring cutting-edge solutions to the table. <br />Let&lsquo;s code something amazing! 😊</p>
          </div>
        </div>
        {/* <div className='min-w-[1740px] max-h-[75px] w-full h-full bg-white rounded-b-[1740px] absolute bottom-[-100px]  '></div> */}
      </div>
    </div>
  );
};

export default HeroSection;
