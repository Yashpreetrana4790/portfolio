import Image from 'next/image';
import Link from 'next/link';
import React from 'react';



const Letconnect: React.FC = () => {
  return (
    <div className='py-[70px]'>
      <div className='container mx-auto  padding-md'>
        <div className='flex flex-col items-center'>
          <div className='mb-[50px]'>

            <h2 className='text-center text-[45px] sm:text-[73px] font-greatvibes  '>
              Let's <span className='text-primary'>Connect</span>
            </h2>
          </div>
          <div className='flex gap-7 mb-[40px]'>
            <Link href="https://github.com/Yashpreetrana4790">
              <Image src="/images/git.svg" alt='github' width={100} height={100} className='w-[44px] h-[39px]' />
            </Link>
            <Link href=" https://x.com/Dev_YashRana?t=UJ9-ziT2arhP5Jy4IH4LCg&s=08">
              <Image src="/images/x.svg" alt='twitter' width={100} height={100} className='w-[44px] h-[39px]' />
            </Link>
            <Link href="https://www.linkedin.com/in/yashpreetrana/">
              <Image src="/images/linkdin.svg" alt='linkdin' width={100} height={100} className='w-[44px] h-[39px]' />
            </Link>
          </div>

          <div className='flex items-center justify-center' >
            <Link className='flex items-center justify-center text-[16px] sm:text-[20px]- gap-3 p-3 rounded-[11px] bg-primary hover:bg-primarydark text-white sm:min-w-[350px] max-h-[46px]'
              href="codecrunchenthusiast@gmail.com">
              <p className='text-[20px] font-inter text-centers'>Email Me
              </p>
              <Image src="/images/ni-bell.svg" alt='arrow' width={100} height={100} className='w-[24px] h-[24px]' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Letconnect;
