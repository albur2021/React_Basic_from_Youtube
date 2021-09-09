import logo from './logo.svg';
import './App.css';
import React from 'react';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import Disctructure from './components/Distructure';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';

function App() {
  return (
    <div className="App">
      {/* <Greet id='Greet Funct Comp' name='Bruce' job='developer'>This Children Prop</Greet>
      <Greet id='Greet Funct Comp' name='Clark' job='back-end tester'><button>Action</button></Greet> */}
      
      
      {/* <Welcome id='Welcome Class Comp' name='Bruce' job='developer'></Welcome>
      <Welcome id='Welcome Class Comp' name='Clark' job='bakc-end tester'></Welcome> */}
      {/* <Hello/> */}
      {/* <Message></Message> */}
      {/* <Counter addValue='1'/> */}
      {/* <Disctructure name="Java" heroName="JavaProject"/>
      <Disctructure name="JS" heroName="Mern"/> */}
      {/* <FunctionClick/>
      <ClassClick/> */}
      {/* <EventBind/> */}
      <ParentComponent/>
    
    </div>
  );
}

export default App;
