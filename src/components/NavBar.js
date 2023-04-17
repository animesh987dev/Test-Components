const NavBar = () => {
  return (
    <div className="justify-between items-center px-10 py-5 sm:hidden md:flex lg:flex xl:flex">
      <p className="text-3xl uppercase font-semibold">Company Name</p>
      <div className="flex justify-center items-center text-xl font-semibold gap-5">
        <p className="text-sky-500 cursor-pointer">Home</p>
        <p className="hover:text-sky-500 cursor-pointer">Services</p>
        <p className="hover:text-sky-500 cursor-pointer">Projects</p>
        <p className="hover:text-sky-500 cursor-pointer">Shop</p>
        <p className="hover:text-sky-500 cursor-pointer">Gallery</p>
      </div>
    </div>
  );
};
export default NavBar;
