const Sidebar = () => {
  return (
    <div className="flex relative items-center justify-center w-full">
      <div className="absolute flex gap-4 mb-16">
        <button className="flex bg-transparent border border-white py-2 px-4 rounded-full text-sm font-bold text-white">
          1
        </button>
        <button className="flex bg-transparent border border-white py-2 px-4 rounded-full text-sm font-bold text-white">
          2
        </button>
        <button className="flex bg-transparent border border-white py-2 px-4 rounded-full text-sm font-bold text-white">
          3
        </button>
        <button className="flex bg-transparent border border-white py-2 px-4 rounded-full text-sm font-bold text-white">
          4
        </button>
      </div>
      <img
        className="md:hidden object-cover w-full h-full"
        src="./bg-sidebar-mobile.svg"
        alt="bg-sidebar-mobile"
      />
    </div>
  );
};

export default Sidebar;
