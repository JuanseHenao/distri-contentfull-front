const Navbar = () => {
  return (
    <nav className="flex flex-col items-center px-6 py-4 bg-white border-b border-r-4 shadow-md dark:text-white md:flex-row md:justify-between border-b-gray-60">
      <div>
        <h2 className="text-3xl font-bold">
          <div className="text-black whitespace-nowrap">
            <img src="https://static.contentful.com/gatekeeper/logos/contentful-dark-221b5b2ac9ad7308346ba1b3a6ca08bd0a0816537e19a0d4e50f32e97cbd4675.svg" />
            <span className="text-blue-600">I</span>mplementation
          </div>
        </h2>
      </div>
      <div className="mt-5 text-black md:mt-0">
        <ul className="flex flex-col items-center w-full md:flex-row md:space-x-5">
          <li>
            <div className="block p-2 font-semibold tracking-tight transition-colors duration-300">
              Sebas M
            </div>
          </li>
          <li>
            <div className="block p-2 font-semibold tracking-tight transition-colors duration-300">
              Sebas G
            </div>
          </li>
          <li>
            <div className="block p-2 font-semibold tracking-tight transition-colors duration-300">
              Juanse
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
