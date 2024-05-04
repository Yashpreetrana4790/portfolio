import React from 'react';
import { NavLink, sidebarLinks } from '@/index';
import Link from 'next/link';
import Image from 'next/image';



const Navbar: React.FC = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex justify-between items-center mt-[30px]' >
        <div className='flex gap-1 items-center'>
          <h1 className='uppercase font-normal text-[20px]'>Rambler</h1>
          <Image src="/logos/ramblerlogo.svg" alt="logo" width={100} height={100} className='w-[20px] h-[25px]' />
        </div>
        <div>
          <ul className='flex gap-[30px] items-center'>
            {sidebarLinks.map((link: NavLink, index: number) => (

              <div key={index} className='flex text-black hover:text-primary font-normal text-[16px] '>
                <Link href={link.route}>{link.label}</Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
