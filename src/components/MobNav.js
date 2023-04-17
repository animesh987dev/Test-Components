const MobNav = (props) => {
  return (
    <div
      className={`absolute top-0 duration-500 ease-in-out ${
        props.state ? "left-0" : "left-[100%]"
      } h-[100vh] w-[100vw] bg-sky-500`}
    >
      <div className="flex relative flex-col h-full w-full justify-center items-center text-2xl gap-5 font-semibold">
        <p className="hover:text-slate-100 cursor-pointer">Home</p>
        <p className="hover:text-slate-100 cursor-pointer">Services</p>
        <p className="hover:text-slate-100 cursor-pointer">Projects</p>
        <p className="hover:text-slate-100 cursor-pointer">Shop</p>
        <p className="hover:text-slate-100 cursor-pointer">Gallery</p>
      </div>
    </div>
  );
};
export default MobNav;
