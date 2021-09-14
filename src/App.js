import logo from "./logo.svg";
import "./App.css";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import React from "react";
import User from "./components/User";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <Counter
      rend = {(count, incrementCount) => (
        <ClickCounter count={count} incrementCount={incrementCount}/>
      )}
      />
      <Counter 
      rend = { (count,incrementCount)=>(
        <HoverCounter count={count} incrementCount={incrementCount}/>
      )}
      />
      {/* <ClickCounter />
      <HoverCounter/> */}
       <User rend = { (isLoggedIn) => isLoggedIn ? 'Almaz' : 'Guest'}/>
    </div>
  );
}

export default App;
