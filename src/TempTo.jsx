function TempTo({input, handleInput}){
return  (
    <select value={input} onChange={handleInput} className="bg-gray-900 drop-shadow-xl/30 border-none  p-2 rounded-md text-center text-white font-semibold ml-18">
        <option value="choose" id="chooseT">
        Choose one.
      </option>
      <option value="Celsius (°C)" id="celT">
        Celsius (°C)
      </option>
      <option value="Fahrenheit (°F)" id="fahrenT">
        Fahrenheit (°F)
      </option>
      <option value="Kelvin (K)" id="kelT">
        Kelvin (K)
      </option>
    </select>
  );
}
export default TempTo;