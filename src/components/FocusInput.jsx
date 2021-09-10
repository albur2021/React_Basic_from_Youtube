import React, { Component } from "react";
import Input from "./Input";

class FocusInput extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  clickHandler = () =>{
      this.componentRef.current.focusInput()//get you access from Child Comp's to its method 'focusInput'
  }
  render() {

    //ref - only could applied into Class Component not Function Component
    //ref - Input/Child Component - binding it to Parent Comp
    return (
      <div>
        <Input ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    );
  }
}

export default FocusInput;
