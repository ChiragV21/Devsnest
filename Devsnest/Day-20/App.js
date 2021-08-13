import "./App.css";
import { useState } from "react";
import CalCard from "./CalCard";
import Calories from "./Data";

export default function App() {
  const [data, setData] = useState(Calories);
  return (
    <div className="app">
      <div className="container">
        {data.length ? (data.map(({ calory, food, id }) => (
            <CalCard
              key={id}
              calory={calory}
              data={data}
              setData={setData}
              food={food}
              id={id}
            />
          ))) : (
          <h1 className="noentry">No Entry</h1>
        )}
      </div>
    </div>
  );
}
