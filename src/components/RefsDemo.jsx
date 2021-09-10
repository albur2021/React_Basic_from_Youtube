import React, { Component } from "react";

class RefsDemo extends Component {

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.callBackRef = null;
    this.setCallBackRef = (element) =>{
        this.callBackRef = element;
    };
  }
  componentDidMount(){
    //There are two appoaches on how to make a pointer:
    //1. using React.createRef
    //2. using directly 'element' to a pointer to navigate to 'type box'

    //   this.inputRef.current.focus()// make a pointer ready to type in 'input box'
    //   console.log(this.inputRef);
    if(this.callBackRef){
        this.callBackRef.focus();
    }
  }
  clickHandler = () =>{ // Fetching Data from input box
     alert(this.inputRef.current.value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <input type="text" ref={this.setCallBackRef} />
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
