const Form = (props) => {
  return (
    <form className="form-base">
      <label className="flex justify-between" htmlFor="">
        Email &nbsp;&nbsp;
        <input className="border-2 border-sky-300 rounded-md" type="email" />
      </label>
      <label className="flex justify-between" htmlFor="">
        Password &nbsp;&nbsp;
        <input className="border-2 border-sky-300 rounded-md" type="password" />
      </label>
      <div className="flex gap-5">
        <input
          className="bg-sky-400 px-3 py-2 rounded-md "
          type="Submit"
          value="Submit"
        />
        <input className="bg-red-400 px-3 py-2 rounded-md " type="reset" />
        <button
          onClick={props.toggle}
          className="bg-red-400 px-3 py-2 rounded-md "
        >
          Close
        </button>
      </div>
    </form>
  );
};
export default Form;
