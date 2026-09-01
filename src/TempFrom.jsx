function TempFrom({ input, handleInput }) {
  return (
    <select value={input} onChange={handleInput} className="bg-gray-900 drop-shadow-xl/30 border-none p-2 rounded-md text-center text-white font-semibold">
      <option value="choose" id="chooseF">
        Choose one.
      </option>
      <option value="Celsius (°C)" id="celF">
        Celsius (°C)
      </option>
      <option value="Fahrenheit (°F)" id="fahrenF">
        Fahrenheit (°F)
      </option>
      <option value="Kelvin (K)" id="kelF">
        Kelvin (K)
      </option>
    </select>
  );
}
export default TempFrom;
