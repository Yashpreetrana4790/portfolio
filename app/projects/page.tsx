import TechButton from '@/components/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const Aboutme: React.FC = () => {


  const techs = [
    {
      label: "Next.js",

    },
    {
      label: "Node.js",

    },
    {
      label: "Express.js",

    },
    {
      label: "MongoDB",

    },
    {
      label: "Tailwind CSS",

    },
    {
      label: "Docker",

    },
    {
      label: "Git",

    }
  ]


  return (
    <div className=' py-[70px] '>
      <div className='container mx-auto  padding-md'>
        <div className='flex flex-col lg:flex-row items-center justify-between lg:gap-[100px]' >
          <div className='lg:w-1/2 mb-[60px] '>
            <h2 className='  text-[45px] sm:text-[73px] font-greatvibes text-primary'>Projects</h2>
            <p className='mb-[40px]'>
              Creating projects is an essential part of the learning journey. It's not just about understanding concepts theoretically; it's about applying them in real-world scenarios. Every project you undertake is an opportunity to solidify your knowledge, hone your skills, and explore new horizons.
              <br />
            </p>
            <span className=''>

              I have build projects in the following technologies :
            </span>
            <div className='flex flex-wrap gap-[10px] text-[14px] my-5'>
              {techs.map((tech, index) => (
                <TechButton key={index} label={tech.label} />
              ))}
            </div>
          </div>
          <div className='lg:w-1/2 hidden lg:block  '>
            <Image src={"/images/code.svg"} alt="code image" width={100} height={100} className='max-w-[567px] max-height-[456px] w-full h-full' />
          </div>
        </div>
        <Link href="#" className='mb-[100px]'>
          <div className='bg-primarylight rounded-[27px] p-7 sm:p-[50px] text-center'>
            <h2 className='text-[35px] font-inter text-black mb-7'>Dev  <span className='text-primary text-underline text-decoration-yellow'> Overflow</span></h2>
            <p className='text-[17px] mb-5 text-justify  sm:text-center '>
              Dev Overflow is a social platform where developers can share their experiences, ask questions, and get help from other developers. It's a place where developers can learn, share their knowledge, and get help from other developers.
            </p>
            <div className='flex justify-center'>

              <Image src={"/images/devflow.svg"} alt="code image" width={100} height={100} className='max-w-[690px] max-height-[375px] w-full h-full' />
            </div>
            <div className='flex flex-wrap justify-center gap-[10px] text-[14px] my-5'>
              {techs.map((tech, index) => (
                <TechButton key={index} label={tech.label} />
              ))}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Aboutme;
