import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Hello",
    };
    //this.clickHandler = this.clickHandler.bind(this);
  }
//     clickHandler(){
//         this.setState({
//             message:'Goodbye'
//         });
//         console.log(this)
//     }
    clickHandler = () =>{
        this.setState({
            message: 'Goodbye!'
        })
    }
  // in render, there are three approaches on how to use 'clickHandler' on button, the last one is most used 
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick = {() => this.clickHandler()}>Click</button> */}
        <button onClick = {this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
