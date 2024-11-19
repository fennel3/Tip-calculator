function ResetButton({reset, handleReset }) {
    return (
      <button
        className="h-10 px-7 m-2 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-indigo-800"
        onClick={handleReset}
      >Reset
        {reset}
      </button>
    );
  }
  export default ResetButton;
  