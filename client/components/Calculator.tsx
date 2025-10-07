import React, { useState } from "react";

export function Calculator() {
  const [display, setDisplay] = useState("180");
  const [expression, setExpression] = useState("45 x 8 ÷ 2");
  const [firstNumber, setFirstNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [newNumber, setNewNumber] = useState(true);

  const handleNumber = (num: string) => {
    if (newNumber) {
      setDisplay(num);
      setExpression("");
      setNewNumber(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const handleOperation = (op: string) => {
    if (operation && !newNumber) {
      calculate();
    }
    setFirstNumber(display);
    setOperation(op);
    setExpression(`${display} ${op}`);
    setNewNumber(true);
  };

  const calculate = () => {
    if (!operation || !firstNumber || newNumber) return;

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(display);
    let result: number;

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "×":
        result = num1 * num2;
        break;
      case "÷":
        result = num2 !== 0 ? num1 / num2 : 0;
        break;
      default:
        return;
    }

    setExpression(`${firstNumber} ${operation} ${display}`);
    setDisplay(result.toString());
    setFirstNumber("");
    setOperation("");
    setNewNumber(true);
  };

  const clear = () => {
    setDisplay("180");
    setExpression("45 x 8 ÷ 2");
    setFirstNumber("");
    setOperation("");
    setNewNumber(true);
  };

  const handleBackspace = () => {
    if (display.length > 1) {
      setDisplay(display.slice(0, -1));
    } else {
      setDisplay("0");
    }
  };

  return (
    <>
      {/* Display */}
      <div className="mb-8">
        <div className="text-white text-right text-lg font-bold mb-2 h-6">
          {expression}
        </div>
        <div className="text-white text-right text-7xl font-bold leading-tight">
          {display}
        </div>
      </div>

      {/* Buttons */}
      <div className="space-y-4">
        <div className="grid grid-cols-4 gap-3.5">
          <button
            className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition"
            onClick={clear}
          >
            c
          </button>
          <button className="text-white text-3xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
            %
          </button>
          <button className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition">
            ±
          </button>
          <button
            className="text-calculator-red text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition"
            onClick={() => handleOperation("÷")}
          >
            ÷
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3.5">
          {[7, 8, 9].map((num) => (
            <button
              key={num}
              className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition"
              onClick={() => handleNumber(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            className="text-calculator-red text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition"
            onClick={() => handleOperation("×")}
          >
            ×
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3.5">
          {[4, 5, 6].map((num) => (
            <button
              key={num}
              className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition"
              onClick={() => handleNumber(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            className="text-calculator-red text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition"
            onClick={() => handleOperation("-")}
          >
            -
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3.5">
          {[1, 2, 3].map((num) => (
            <button
              key={num}
              className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition"
              onClick={() => handleNumber(num.toString())}
            >
              {num}
            </button>
          ))}
          <button
            className="text-calculator-red text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition"
            onClick={() => handleOperation("+")}
          >
            +
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3.5">
          <button 
            className="h-14 flex items-center justify-center hover:opacity-80 transition"
            onClick={handleBackspace}
          >
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/6c83b1507310274668de23ebd3b21e56e865e33a?width=102"
              alt="backspace"
              className="w-12 h-12 object-contain"
            />
          </button>
          <button
            className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition"
            onClick={() => handleNumber("0")}
          >
            0
          </button>
          <button
            className="text-white text-4xl font-bold h-14 flex items-center justify-center hover:opacity-80 transition"
            onClick={() => handleNumber(".")}
          >
            .
          </button>
          <button
            className="bg-calculator-red text-white text-4xl font-bold h-14 flex items-center justify-center rounded-lg shadow-lg hover:opacity-90 transition"
            onClick={calculate}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
}
