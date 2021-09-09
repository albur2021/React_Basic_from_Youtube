import React, { Component } from "react";
import LifecycleB from "./LifecycleB";

class LifecycleA extends Component {
//1. Mounting //////////////////////
  constructor(props) {
    super(props);
    this.state = {
      name: "Almaz",
    };
    console.log("LifecycleA  costructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }
  //2. Updating ////////////////////////////
  shouldComponentUpdate(){
      console.log('LifecycleA shouldComponentUpdate');
      return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('LifecycleA getSnapshotBeforeUpdate');
      return null;
  }
  
  componentDidUpdate(){
      console.log('LifecycleA componentDidUpdate');
  }

  //changeHandler method
  changeState = () =>{
      this.setState ({
          name: 'CodeEvolution'
      })
  }

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>Lifecycle A</div>
        <button onClick={this.changeState}>Change state</button>
        <LifecycleB>Lifecycle B</LifecycleB>
      </div>
    );
  }
}

export default LifecycleA;
