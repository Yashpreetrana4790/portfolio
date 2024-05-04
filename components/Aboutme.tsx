import Image from 'next/image';
import React from 'react';



const Aboutme: React.FC = () => {
  return (
    <div className='bg-primarylight py-[70px] md:py-[130px]'>
      <div className='container mx-auto relative padding-md'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-[40px]' >
          <div className='md:w-3/5 max-md:order-2'>
            <h2 className='text-center sm:text-left md:block hidden text-[73px] font-greatvibes  mb-[10px] text-primary'>
              About Me
            </h2>
            <p className='text-justify sm:text-left font-inter text-[17px] leading-[141.3%]'>I am deeply committed to growth and learning, constantly seeking out new opportunities to expand my knowledge and skills. Eager and enthusiastic, I approach each challenge with an open mind and a determination to excel. I thrive on the journey of self-improvement, always pushing myself to reach new heights and exceed expectations. My insatiable curiosity drives me to explore diverse subjects and perspectives, fostering a rich understanding of the world around me. With a passion for discovery and a relentless drive for excellence, I embrace every opportunity to learn and grow, knowing that each experience brings me closer to realizing my full potential.</p>
          </div>
          <div className='md:w-2/5 flex-col md:flex md:justify-end max-md:order-1'>
            <h2 className='text-center md:hidden block text-[73px] font-greatvibes  mb-[10px] text-primary'>
              About Me
            </h2>
            <Image src={"/images/computerhello.svg"} alt="hero" width={100} height={100} className='max-w-[334px] max-height-[446px] w-full h-full' />
          </div>


        </div>
      </div>
    </div>
  );
};

export default Aboutme;
