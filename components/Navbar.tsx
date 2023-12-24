import React from 'react';
import { sidebarLinks } from '@/index';
import Link from 'next/link';

interface NavLink {
  route: string;
  label: string;
}

const Navbar: React.FC = () => {
  return (
    <nav className=' bg-black  '>
      <div className='pl-[182px] max-w-[1600px] w-full  mx-auto  pr-[182px] flex justify-between py-7'>
        <div>
          <h1 className='text-[36px] font-black text-gray uppercase '>Ramblerx</h1>
        </div>
        <div className='flex  gap-[52px] items-center'>
          {sidebarLinks.map((link: NavLink, index: number) => (
            <div key={index} className='flex text-gray '>
              <Link href={link.route}>{link.label}</Link>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
