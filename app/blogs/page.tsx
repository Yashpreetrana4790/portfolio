import { BlogsData } from "@/Blogs";
import BlogCard from "@/components/BlogCard";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";


const Blogs: React.FC = () => {





  return (

    <div className=' py-[70px] '>
      <div className='container mx-auto  padding-md '>
        <h2 className='text-[45px] sm:text-[73px] font-greatvibes text-primary text-center mb-[12px] '>Blogs</h2>

        <p className='text-[18px] text-center w-full max-w-[900px] mx-auto'>Writings  about my journey as a developer, learning through the products I build,  and life experiences.
          And in case you're wondering I write about.</p>
        <div className="flex gap-5 mx-auto mt-[50px]">

          <div className="hidden md:block">
            <Sidebar />
          </div>
          <div className="flex flex-col space-y-2 ">
            {BlogsData.map((data, index) => (
              <Link href={`/blogs/${data?.id}`} as={`/blogs/${data.id}`}>
                < BlogCard key={data?.id} {...data} />
              </Link>
            ))}
          </div>

        </div>
      </div>
    </div >
  );
};

export default Blogs;
