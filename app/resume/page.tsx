import Image from 'next/image';
import React from 'react';



const Resume: React.FC = () => {
  return (
    <div className='py-[70px]'>
      <div className='container mx-auto  padding-md'>
        <div className='mb-[48px]'>

          <h2 className='text-[45px] sm:text-[73px] font-greatvibes text-center text-primary mb-[25px] sm:mb-[40px]'>Hey!</h2>
          <h3 className='text-[20px] sm:text-[25px] font-inter font-medium text-center mb-[18px]'> I am <span className='text-primary '>Yashpreet Rana</span></h3>
          <p className=' text-[16px] sm:text-[18px] font-inter font-normal text-center max-w-[870px] mx-auto '>I am a passionate <span className='text-primary underline  decoration-yellow-500 underline-offset-6'>Frontend Engineer</span> with experience in React and Next.js, dedicated to
            continuous learning, backed by 1 year of hands-on experience in crafting dynamic and  user-centric web applications.</p>
        </div>
        <div className='mb-5'>
          <h3 className='text-[20px] sm:text-[25px] font-inter font-medium text-center '> Technical <span className='text-primary '>Skills</span></h3>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 max-w-[800px] w-full mx-auto '>
          <div className='sm:col-span-12'>
            <div className='flex flex-wrap justify-between'>
              <Image src="/logos/nodejs.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/React.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/Redux.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/Github.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/kubernetes.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/Docker.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/Nextjs.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/AWS.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/postman.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/tailwindcss.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/express.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/prisma.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 max-w-[450px] w-full mx-auto mb-[48px]'>
          <div className='sm:col-span-12'>
            <div className='flex flex-wrap justify-between'>
              <Image src="/logos/mongodb.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/html.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/js.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/css.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/shadcn.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/zod.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/figma_logo.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
              <Image src="/logos/vscode.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px] mb-4' />
            </div>
          </div>
        </div>
        <div className='mb-5'>
          <h3 className='text-[20px] sm:text-[25px] font-inter font-medium text-center  mb-5'> Work <span className='text-primary '>Experience</span></h3>
          <p className='text-[19px] text-center font-medium font-inter'>TWS <span className='text-gray'>(Tekki web solutions private ltd) </span> | On-site <span className='text-primary'>(Ludhiana)</span></p>
        </div>
        <div className='flex items-center justify-center' >
          <button className='flex items-center justify-center gap-3 p-3 rounded-[11px] bg-primary  text-white min-w-[350px] max-h-[46px]'>
            <p className='text-[20px] font-inter text-centers'>Download Resume
            </p>
            <Image src="/logos/download.svg" alt='arrow' width={100} height={100} className='w-[24px] h-[24px]' />
          </button>
        </div>


      </div>
    </div>
  );
};

export default Resume;
