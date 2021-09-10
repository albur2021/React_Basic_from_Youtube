import React, { Component } from 'react';
// Regular Component - does not implement the 'shouldComponentUpdate' method. It always returns 'true' by default

class RegComp extends Component {
render() {
 console.log('Regular Component');
    return (
        <div>
          Regular Component {this.props.name}
        </div>
        );
    }
 }

export default RegComp;