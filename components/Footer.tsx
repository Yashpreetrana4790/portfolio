import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NavLink, sidebarLinks } from '@/index';



const Footer: React.FC = () => {
  return (
    <div className='container mx-auto mb-[20px]'>
      <div className='flex-col  justify-between items-center mt-[30px]' >
        <div className='flex gap-1 items-center justify-center'>
          <h2 className='uppercase font-semibold text-[37px]  text-center mb-[15px]'>RamblerX</h2>
        </div>
        <div>
          <ul className='flex gap-[30px] items-center justify-center'>
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

export default Footer;
