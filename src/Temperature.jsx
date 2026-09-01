import TempInput from "./TempInput";
import TempFrom from "./TempFrom";
import TempTo from "./TempTo";
import ShiftBtn from "./ShiftBtn";
import TempOutput from "./TempOutput";
import { useState } from "react";
import "./temp.css";
function Temperature() {
  let [input, setInput] = useState({
    inp: "",
    from: "",
    to: "",
    shiftBtn: false,
    displayOutput: "",
  });
  function handleInput(e) {
    setInput({
      ...input,
      inp: e.target.value,
    });
  }
  function handleFrom(e) {
    setInput({
      ...input,
      from: e.target.value,
    });
  }

  function handleTo(e) {
    setInput({
      ...input,
      to: e.target.value,
    });
  }

  function handleShift(e) {
    setInput({
      ...input,
      displayOutput: input.inp,
      shiftBtn: true,
    });
  }
  function handleClear(e) {
    setInput({
      ...input,
      inp: "",
      from: "",
      to: "",
      shiftBtn: false,
      displayOutput: "",
    });
  }
  return (
    <div id="TempBox">
      <TempInput input={input.inp} handleInput={handleInput} />
      <div id="tempOptions">
        <TempFrom input={input.from} handleInput={handleFrom} />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <TempTo input={input.to} handleInput={handleTo} />
      </div>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <ShiftBtn inputs={input} handleInput={handleShift} handleClear={handleClear}/>
    </div>
  );
}
export default Temperature;
