const Sidebar: React.FC = () => {

  return (
    <div className="p-8 bg-dark_gray rounded-[16px] sm:min-w-[328px] sticky top-20">

      <ul className="flex flex-col gap-[15px]">
        <li className="bg-primary flex  justify-between items-center bg-graydark-950 px-4 py-2 rounded-[12px] text-white font-semibold border border-gray_med text-[17px]">
          <span>React</span>
          <span className="bg-yellow_bright text-[16px] p-2 w-[30px] h-[30px] flex items-center justify-center rounded-full text-white font-semibold">10</span>
        </li>
        <li className="bg-primary flex  justify-between items-center bg-graydark-950 px-4 py-2 rounded-[12px] text-white font-semibold border border-gray_med text-[17px]">
          <span>Next.js</span>
          <span className="bg-yellow_bright text-[16px] p-2 w-[30px] h-[30px] flex items-center justify-center rounded-full text-white font-semibold">5</span>
        </li>
        <li className="bg-primary flex  justify-between items-center bg-graydark-950 px-4 py-2 rounded-[12px] text-white font-semibold border border-gray_med text-[17px]">
          <span>Typescript</span>
          <span className="bg-yellow_bright text-[16px] p-2 w-[30px] h-[30px] flex items-center justify-center rounded-full text-white font-semibold">1</span>
        </li>
        <li className="bg-primary flex  justify-between items-center bg-graydark-950 px-4 py-2 rounded-[12px] text-white font-semibold border border-gray_med text-[17px]">
          <span>Node.js</span>
          <span className="bg-yellow_bright text-[16px] p-2 w-[30px] h-[30px] flex items-center justify-center rounded-full text-white font-semibold">1</span>
        </li>
        <li className="bg-primary flex  justify-between items-center bg-graydark-950 px-4 py-2 rounded-[12px] text-white font-semibold border border-gray_med text-[17px]">
          <span>Aws</span>
          <span className="bg-yellow_bright text-[16px] p-2 w-[30px] h-[30px] flex items-center justify-center rounded-full text-white font-semibold">1</span>
        </li>
        <li className="bg-primary flex  justify-between items-center bg-graydark-950 px-4 py-2 rounded-[12px] text-white font-semibold border border-gray_med text-[17px]">
          <span>Mongodb</span>
          <span className="bg-yellow_bright text-[16px] p-2 w-[30px] h-[30px] flex items-center justify-center rounded-full text-white font-semibold">1</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;