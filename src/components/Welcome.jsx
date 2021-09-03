import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <div>
        <h1>Id: {this.props.id},</h1>
        {this.children}
        <h1>Name: {this.name}, </h1>
        {this.children}
        <h1>Position: {this.job}</h1>
        {this.children}
      </div>
    );
  }
}

export default Welcome;
