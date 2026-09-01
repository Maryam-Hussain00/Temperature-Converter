import Temperature from "./Temperature";
import Chart from "./Chart/Chart";

function App() {
  return (
    <>
      <div className="h-160 border-2 border-black-500 rounded-2xl font-serif text-lg/16 m-10 p-5 bg-[#024959] text-[#F2F2F2]">
        <h1 className="text-2xl/12 font-semibold ">Temperature made simple.</h1>
        <h1 className="relative left-40 text-2xl/12 font-semibold mb-4 w-100">
          Convert °C, °F, and K with ease.
        </h1>
        <Temperature />
         <Chart />
      </div>
    </>
  );
}

export default App;
