const Sidebar: React.FC = () => {

  return (
    <div className="p-8 bg-dark_gray rounded-[16px] sm:min-w-[328px]">

      <ul className="flex flex-col gap-[20px]">
        <li className="hover:bg-rose-900 flex  justify-between items-center bg-graydark-950 px-4 py-2 rounded-[12px] text-white font-semibold border border-gray_med text-[17px]">
          <span>React</span>
          <span className="bg-yellow_bright p-1 w-7 h-7 flex items-center justify-center rounded-full text-white font-bold">10</span>
        </li>
        <li className="hover:bg-rose-900 flex  justify-between items-center bg-graydark-950 px-4 py-2 rounded-[12px] text-white font-semibold border border-gray_med text-[17px]">
          <span>Next.js</span>
          <span className="bg-yellow_bright p-1 w-7 h-7 flex items-center justify-center rounded-full text-white font-bold">10</span>
        </li>
        <li className="hover:bg-rose-900 flex  justify-between items-center bg-graydark-950 px-4 py-2 rounded-[12px] text-white font-semibold border border-gray_med text-[17px]">
          <span>Typescript</span>
          <span className="bg-yellow_bright p-1 w-7 h-7 flex items-center justify-center rounded-full text-white font-bold">10</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;