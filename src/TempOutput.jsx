function TempOutput({ input }) {
  if (input.displayOutput.trim() === "" || isNaN(input.displayOutput)) {
    return <h3>Kindly write a number in the input field.</h3>;
  }
  let output;
  let temp = Number(input.displayOutput);
  //celsius
  if (input.from === "Celsius (°C)" && input.to === "Fahrenheit (°F)") {
    output = (temp * 9) / 5 + 32;
  } else if (input.from === "Celsius (°C)" && input.to === "Kelvin (K)") {
    output = temp + 273.15;
  } else if (input.from === "Fahrenheit (°F)" && input.to === "Celsius (°C)") {
    output = ((temp - 32) * 5) / 9;
  } else if (input.from === "Fahrenheit (°F)" && input.to === "Kelvin (K)") {
    output = ((temp - 32) * 5) / 9 + 273.15;
  } else if (input.from === "Kelvin (K)" && input.to === "Celsius (°C)") {
    output = temp - 273.15;
  } else if (input.from === "Kelvin (K)" && input.to === "Fahrenheit (°F)") {
    output = ((temp - 273.15) * 9) / 5 + 32;
  } else if (input.from === input.to) {
    output = temp;
  }
  return (
    <>
      <div
        id="output"
      >
        <h3>{output}</h3>
      </div>
    </>
  );
}
export default TempOutput;
