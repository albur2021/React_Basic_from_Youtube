import logo from "./logo.svg";
import "./App.css";
import React from "react";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";

//Lift counter logic to Parent and pass props
//Component Tree - Parent - > props -> ClickCounter and HoverCounter -> state -> Parent
//Higher Order Components (HOC) - A pattern where a function takes a component as an argument and returns a new component
//Example:
// const newComponent = higherOrderComponent (originalComponent)
// const EnhancedComponent = higherOrderComponent (originalComponent)
function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter/>
    </div>
  );
}

export default App;
