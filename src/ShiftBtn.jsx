import TempOutput from "./TempOutput";
function ShiftBtn({ inputs, handleInput, handleClear }) {
  return (
    <>
      <button
        onClick={handleInput}
        className="mt-6 border-b-2 rounded-md border-b-black-500 w-30 h-12 text-center"
      >
        Convert
      </button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button
        onClick={handleClear}
        className="ml-16 border-b-2 rounded-md border-b-black-500 w-30 h-12 text-center "
      >
        Clear
      </button>
      <br></br>
      <label>Result:-</label>
      <div
        id="outputBox"
        className="p-2 flex justify-center items-center text-center w-60 h-40 border-2 border-black-500 rounded-md"
      >
        {inputs.shiftBtn && <TempOutput input={inputs} />}
      </div>
    </>
  );
}
export default ShiftBtn;
