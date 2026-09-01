import { useState } from "react";
function TempInput({ input, handleInput }) {
  return (
    <div className="mb-6 mt-6">
      <label className="pt-2 text-xl mr-19">Enter Temperature:</label>
      &nbsp; &nbsp;
      <input
        type="text"
        placeholder="Type the digits."
        value={input}
        onChange={handleInput}
        className="w-60 
        h-10 rounded-md 
        p-4 transition-all ease-in-out
        duration-100 
        focus: outline-none
        focus:border-b-2 
        focus:border-b-black-500
        "
      ></input>
    </div>
  );
}
export default TempInput;
