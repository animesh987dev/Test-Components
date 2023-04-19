const NavBar = (props) => {
  return (
    <div className="flex justify-between items-center py-5 px-10 bg-indigo-200">
      <p className="text-3xl font-semibold">GlucoTrust&#8482;</p>
      <div className="flex gap-5 text-xl font-semibold items-center">
        <p className="nav-link">Home</p>
        <p className="nav-link">Team</p>
        <p className="nav-link">Projects</p>
        <p className="nav-link">Reports</p>
        <button onClick={props.toggle} className="cta-btn">
          Login
        </button>
      </div>
    </div>
  );
};

export default NavBar;
