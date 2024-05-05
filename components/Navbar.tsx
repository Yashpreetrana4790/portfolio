'use client'
import React from 'react';
import { NavLink, sidebarLinks } from '@/index';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'
const Navbar: React.FC = () => {
  const currentPath = usePathname()

  return (
    <div className=' gradient-drop-shadow drop-shadow-lg bg-white py-4  sticky top-0 z-50 '>

      <div className='container mx-auto '>
        <div className='flex justify-between items-center '>
          <Link href="/" className='flex gap-1 items-center hover:cursor-pointer'>
            <h1 className='uppercase font-semibold text-[20px] text-primary'>Rambler</h1>
            <Image src="/logos/logoout.svg" alt="logo" width={100} height={100} className='w-[20px] h-[25px]' />
          </Link>
          <div className='hidden sm:block'>
            <ul className='flex gap-[30px] items-center'>
              {sidebarLinks.map((link: NavLink, index: number) => (
                <div key={index} className={`flex text-black hover:text-primary font-normal text-[16px] ${currentPath === link.route ? 'text-primary font-semibold' : ''}`}>
                  <Link href={link.route}>{link.label}</Link>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
