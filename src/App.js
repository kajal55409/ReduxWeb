import React from "react";
import "./App.css";
import { useSelector,useDispatch } from "react-redux";
 import { incNummer,decNummer } from "./actions/index";
const App = () => {
const myState =useSelector((state)=>state.changeTheNumber);
const dispatch =useDispatch();

  return (
    <>
      <div className="App-header ">
        <h1>Increment/Decrement counter</h1>
        <h4>using react and redux</h4>

        <div className="App">
          <button
            className="App"
            title="DECREASE_NUMBER"
            onClick={() => dispatch(decNummer())}
          >
            <span> - </span>
          </button>
          <input
            name="quantity"
            type="text"
            className="App"
            value={myState}
            onChange={(e) => dispatch(incNummer())}
          />
          <button
            className="App"
            title="INCREASE_NUMBER"
            onClick={() => dispatch(incNummer(1))}
          >
            <span>+</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
