import { useState } from "react";
import "./App.css";
import Button from "./components/Button/Button";
import Greybox from "./components/Greybox-input";
import ResetButton from "./components/Reset-button";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [discountAmount, setDiscountAmount] = useState(0); //makes a variable called discountAmount and sets it to the amount.

  function handleClick5percent() {
    setDiscountAmount(0.05);
  }

  function handleClick10percent() {
    setDiscountAmount(0.1);
  }

  function handleClick15percent() {
    setDiscountAmount(0.15);
  }

  function handleClick25percent() {
    setDiscountAmount(0.25);
  }

  function handleClick50percent() {
    setDiscountAmount(0.5);
  }

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleReset() {
    setDiscountAmount(0);
    setInputValue("")
  }

  let bill = Number(inputValue) || 0;
  let totalTip = bill * discountAmount;
  let total = bill + totalTip;

  return (
    <body className="bg-cyan-200">
      <div class=" bg-cyan-200 w-full h-32 m-auto flex justify-center content-center items-center ">
        <h1>splitter</h1>
      </div>

      <div class="w-full h-svh bg-cyan-200 flex justify-center content-center items-center ">
        <div class="bg-white w-4/6 h-4/6 flex justify-center content-center items-center rounded-lg">
          <div class="bg-slate-300 w-2/5 h-4/5 rounded-lg">
            <div class="m-5">
              bill
              <Greybox value={inputValue} handleChange={handleChange} />
            </div>
            <div class="flex-wrap ml-3">
              <div class="w-5/6 h-1/6 ml-2">select tip boxes</div>
              <Button
                discount={5}
                percent={5}
                clickHandler={handleClick5percent}
              />
              <Button
                discount={10}
                percent={10}
                clickHandler={handleClick10percent}
              />
              <Button
                discount={15}
                percent={15}
                clickHandler={handleClick15percent}
              />
              <Button
                discount={25}
                percent={25}
                clickHandler={handleClick25percent}
              />
              <Button
                discount={50}
                percent={50}
                clickHandler={handleClick50percent}
              />
            </div>

            <div class="m-5">
              number of people
              <Greybox />
            </div>
          </div>

          <div class="bg-teal-500 w-2/5 h-4/5 rounded-lg">
            <div class="m-8">
              tip amount
              <div class="text-2xl float-end">${totalTip}</div>
            </div>
            <div class="m-8">
              total
              <div class="text-2xl float-end">${total}</div>
            </div>
            <div>
              <ResetButton handleReset={handleReset} />
            </div>
          </div>
        </div>
      </div>
    </body>
  );
}

export default App;
