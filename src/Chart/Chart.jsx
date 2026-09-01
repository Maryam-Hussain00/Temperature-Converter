import React from "react";

function Chart() {
  return (
    <div className="w-120 h-100 relative left-145 bottom-155 ">
      <label className="relative left-55 top-20 font-bold text-xl">Chart</label>
      <table className="text-center [&_th]:border-2 [&_th]:border-white [&_th]:p-4 [&_td]:border-2 [&_td]:border-white [&_td]:p-4 border-separate m-4 mt-25 border-2 rounded-md border-white">
        <thead>
          <tr>
            <th>From/To</th>
            <th>Celsius</th>
            <th>Fahrenheit</th>
            <th>Kelvin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Celsius</th>
            <td>1</td>
            <td>33.8</td>
            <td>273.15</td>
          </tr>
          <tr>
            <th>Fahrenheit</th>
            <td>-17.22</td>
            <td>1</td>
            <td>255.92778</td>
          </tr>
          <tr>
            <th>Kelvin</th>
            <td>-272.15</td>
            <td>-457.87</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Chart;
