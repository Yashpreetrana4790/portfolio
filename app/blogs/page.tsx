import BlogCard from "@/components/BlogCard";
import Sidebar from "@/components/Sidebar";


const Blogs: React.FC = () => {


  const fakeData = [
    {
      title: 'Lorem Ipsum Dolor Sit Amet',
      description: 'It/s not completely your fault(maybe a little, but not much).Ill help  you understand why.  Different companies will have different ways of shortlisting candidates  and interviewing them. Here Ill just talk from my experience in hiring  for engineering talent at Rocketium.I hope this might hold',
      date: 'May 1, 2024',
      tags: ['React', 'JavaScript', 'UI Design'],
      readtime: 8
    },
    {
      title: 'Consectetur Adipiscing Elit',
      description: 'It\'s not completely your fault (maybe a little, but not much) Ill help  you understand why.  Different companies will have different ways of shortlisting candidates  and interviewing them. Here Ill just talk from my experience in hiring  for engineering talent at Rocketium. I hope this might hold true for you...',
      date: 'April 28, 2024',
      tags: ['Frontend', 'Web Development', 'CSS'],
      readtime: 8

    },
  ];


  return (

    <div className=' py-[70px] '>
      <div className='container mx-auto  padding-md'>
        <h2 className='text-[45px] sm:text-[73px] font-greatvibes text-primary text-center mb-[12px] '>Blogs</h2>

        <p className='text-[18px] text-center w-full max-w-[900px] mx-auto'>Writings  about my journey as a developer, learning through the products I build,  and life experiences.
          And in case you're wondering I write about.</p>
        <div className="flex gap-5 mx-auto mt-[50px]">

          <div className="hidden md:block">
            <Sidebar />
          </div>
          <div className="flex flex-col space-y-2">
            {fakeData.map((data, index) => (
              <BlogCard key={index} {...data} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Blogs;
