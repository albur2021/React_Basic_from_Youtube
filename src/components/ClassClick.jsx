import React, { Component } from 'react';

class ClassClick extends Component {

clickHandler(){
    console.log("Clicked from Class Comp");
}
render() {
    return (
        <div>
          <button onClick={this.clickHandler}>Click from Class Component</button>
        </div>
        );
    }
 }

export default ClassClick