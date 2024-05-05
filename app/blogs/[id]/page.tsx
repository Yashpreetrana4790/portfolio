'use client'
import { useParams } from 'next/navigation'
import { BlogsData } from '@/Blogs';
import TechButton from '@/components/button';
const BlogDetailPage: React.FC = () => {

  const params = useParams<{ id: string }>()

  const blog = BlogsData.filter(blog => blog.id === parseInt(params.id))[0]

  return (

    <div className=' py-[70px] w-calc[100% + 2rem - 16] '>
      <div className='container mx-auto  padding-md max-w-[820px]'>
        <h2 className='text-[24px] lg:text-[40px]  font-inter text-primary text-justify  mb-10 '>{blog?.title}</h2>
        <span className='text-[16px] text-[#808080] '>{blog?.date}</span>
        <p className='text-justify  text-[16px]  mx-auto mt-4'>{blog?.description}</p>
        <div className='my-10 flex flex-wrap gap-[10px]'>
          {
            blog.tags.map((tech, index) => (
              <TechButton key={index} label={tech} />
            ))
          }
        </div>
      </div>
    </div >
  );
};

export default BlogDetailPage;
