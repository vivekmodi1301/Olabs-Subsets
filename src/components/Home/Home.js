import React, { useState } from "react";
import "./Home.css";

export default function Home() {
  const [subsets, setSubsets] = useState([]);

  const handleGenerateSubsets = () => {
    const numbersInput = document.getElementById("numbers");
    const numbersString = numbersInput.value.trim();
    const numbersArray = numbersString.split(" ").map(Number);
    const subsets = getSubsets(numbersArray);
    setSubsets(subsets);
  };

  const getSubsets = (numbers) => {
    const subsets = [];
    for (let i = 0; i < 1 << numbers.length; i++) {
      const subset = [];
      for (let j = 0; j < numbers.length; j++) {
        if (i & (1 << j)) {
          subset.push(numbers[j]);
        }
      }
      subsets.push(subset);
    }
    return subsets;
  };

  return (
    <>
      <div className="container">
        <h1>Subsets Virtual Lab</h1>
        <form>
          <label htmlFor="numbers">
            Enter a list of numbers: (in this order : a b c)
          </label>
          <input type="text" id="numbers" className="numberInput" />
          <button type="button" onClick={handleGenerateSubsets}>
            Generate Subsets
          </button>
        </form>
      <div id="subsets">
        <div className="containerSub">
          {subsets.map((subset, index) => (
            <div className="card" key={index}>
              {subset.join(" \n\n")}
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}
