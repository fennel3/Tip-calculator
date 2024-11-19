function Button({ percent, clickHandler }) {

  
  return (
    <button
      className="h-10 px-7 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
      onClick={clickHandler}
    >
      {percent}%
    </button>
  );
}
export default Button;
