const NavBtn = (props) => {
  return (
    <button
      onClick={props.updater}
      className={`absolute sm:flex md:hidden lg:hidden xl:hidden top-8 right-14 text-3xl rounded-full pb-1 font-semibold flex justify-center items-center h-10 w-10 ${
        props.state ? "bg-slate-100" : "bg-sky-500"
      } ${props.state ? "text-slate-800" : "text-slate-200"}`}
    >
      =
    </button>
  );
};
export default NavBtn;
