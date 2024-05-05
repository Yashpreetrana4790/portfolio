import React from 'react'
import TechButton from './button';

interface props {
  title: string;
  description: string;
  date: string;
  readtime: number;
  tags: string[];
}



const BlogCard = ({ title, description, date, tags, readtime }: props) => {
  return (
    <div className='px-6  py-4 rounded-[18px] bg-primarylight max-w-[764px]'>

      <h2 className='text-primarydark text-[25px] capitalize mb-3  py-[6px] rounded-[10px] font-semibold'>{title}</h2>
      <p className='text-[15px] text-black mb-[15px]'>{description}</p>

      <div className='flex justify-between items-center mb-[15px]'>
        <p className='text-[12px] text-gray_two'>{date} <span className='ml-1'>•</span> <span>{readtime} minutes</span></p>

      </div>
      <div className='flex flex-wrap gap-[10px] text-[14px] my-2'>

        {tags.map((tag, index) => (
          <TechButton label={tag} />
        ))}
      </div>
    </div>
  )
}

export default BlogCard