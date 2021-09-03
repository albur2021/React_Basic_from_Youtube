import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';

function App() {
  return (
    <div className="App">
      <Greet id='Greet Funct Comp' name='Bruce' job='developer'>This Children Prop</Greet>
      <Greet id='Greet Funct Comp' name='Clark' job='back-end tester'><button>Action</button></Greet>
      
      <Welcome id='Welcome Class Comp' name='Bruce' job='developer'></Welcome>
      <Welcome id='Welcome Class Comp' name='Clark' job='bakc-end tester'></Welcome>
      <Hello/>
    
    </div>
  );
}

export default App;
