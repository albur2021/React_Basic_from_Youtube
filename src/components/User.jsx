import React, { Component } from 'react';

class User extends Component {
render() {
//Render props - refers to a technque for sharing codee between React Components using a prop whose value is a funciton
    return (
        <div>
         {this.props.rend(false)}
        </div>
        );
    }
 }

export default User;