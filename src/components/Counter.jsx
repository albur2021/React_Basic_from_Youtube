import React, { Component } from 'react';
import reactDom from 'react-dom';

class Counter extends Component {
    
    constructor(props){
        super(props)
        this.state={
            count: props.addValue
        };
    }
    increment(){
        //this.state.count = this.state.count + 1; not rendering in UI, just in inspect/console
        // this.setState(
        //     {
        //     count:this.state.count + 1
        // },
        // ()=>{
        //     console.log('Callback value', this.state.count);
        // }
        // );
        
        //previousState - make sure to pass as an argument to update the previous value
        // setState - use to update your 'second arument - props.addValue'
        // and have 'count: previousState.count' as a backet; 
        this.setState((previousState, props)=> ({
            count: previousState.count + props.addValue
        }));
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
render() {
    
    return (
        <div>
          <div>Count = {this.state.count}</div>
          <button onClick={() => this.incrementFive()}>Increment</button>
        </div>
        );
    }
 }

export default Counter;
