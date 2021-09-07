import React, { Component } from "react";

class Welcome extends Component {
  render() {
    //distructuring properties
    const {id,name,job,} = this.props;
    //the same way with 'state' which is not used here
    //ex: const {state1, state2} = this.state
    return (
      <div>
        <h1>Id: {id},</h1>
       
        <h1>Name: {name}, </h1>
        
        <h1>Position: {job}</h1>
      
      </div>
    );
  }
}

export default Welcome;
