import React, { Component, PureComponent } from 'react';
// Pure Component - on the other hand implements 'shouldComponentUpdate' with a shallow props and state comparison
// If there is no difference, the component is not re-rendered - which is in certain situation is good - perfomance boost
// it is good idea to ensure that all the 'children components are also pure to avoid unexpected behaviour
// Never mutate the state. Always reutrn a new object that reflects the new State
class PureComp extends PureComponent {
render() {
  console.log("Pure Component");
    return (
        <div>
         Pure Component {this.props.name}
        </div>
        );
    }
 }

export default PureComp;