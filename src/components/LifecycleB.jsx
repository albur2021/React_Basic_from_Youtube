import React, { Component } from "react";

class LifecycleB extends Component {
  //1. Mounting //////////////////////
  constructor(props) {
    super(props);
    this.state = {
      name: "Almaz",
    };
    console.log("LifecycleB  costructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleB getDerivedStateFromProps");
    return null;
  }
  componentDidMount() {
    console.log("LifecycleB componentDidMount");
  }


  //2. Updating ////////////////////////////
  shouldComponentUpdate(){
    console.log('LifecycleB shouldComponentUpdate');
    return true;
}
getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('LifecycleB getSnapshotBeforeUpdate');
    return null;
}

componentDidUpdate(){
    console.log('LifecycleB componentDidUpdate');
}
  render() {
    console.log("LifecycleB render");
    return <div>LifecycleB</div>;
  }
}

export default LifecycleB;
