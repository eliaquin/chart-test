import React from "react";
import StackedChart from "./components/StackedChart";

function App() {
  const barValues = [{ s1: 20, s2: 30 }];
  // Generate rest of the data
  for (let index = 25; index < 90; index += 5) {
    const x = index;
    const y = 100 - index;
    barValues.push({ s1: x, s2: y });
  }
  barValues.push({ s1: 30, s2: 5 });
  const lineValues = [
    { x: 1, y: 90 },
    { x: 2, y: 87 },
    { x: 3, y: 80 },
    { x: 4, y: 74 },
    { x: 5, y: 70 },
    { x: 6, y: 64 },
    { x: 7, y: 59 },
    { x: 8, y: 53 },
    { x: 9, y: 45 },
    { x: 10, y: 40 },
    { x: 11, y: 38 },
    { x: 12, y: 25 },
    { x: 13, y: 18 },
    { x: 14, y: 10 },
    { x: 15, y: 0 },
  ];
  return (
    <div className="App">
      <StackedChart barValues={barValues} lineValues={lineValues} />
    </div>
  );
}

export default App;
