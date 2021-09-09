import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
      // There are 3 conditional methods on how to approach to render either false or true
      // Note that 'if' condition - was applied to render 'div tag'
    
      // 0. setting true/false expression to evaluate 'state's property
      // returns 'Welcome Guest' because was set to be false;
      return this.state.isLoggedIn && <div>Welcome Almaz</div> || <div>Welcome Guest</div>
      //1. setting in tirnary operator - most used:
    //   return this.state.isLoggedIn ? (
    //       <div> Welcome Almaz</div> // will return this test if it was meant to be true
    //   ) : (
    //       <div> Welcome Guest</div>// will return this because was set to 'false'
    //   )
      
      //2. setting in variable
    //   let message
    //   if(this.state.isLoggedIn){
    //       message = <div> Welcome Almaz</div>

    //   }else{
    //       message = <div> Welcome Guest</div>
    //   }
    // return <div>{message}</div>
        //3.
    //   if(this.state.isLoggedIn){
    //       return (
    //           <div>
    //               Welcome Almaz
    //           </div>
    //       )
    //   }else{
    //       return (
    //           <div>
    //               Welcome Guest
    //           </div>
    //       )
    //   }
      //4.
    // return (
    //   <div>
    //     <div>Welcome Almaz</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
  
  }
}

export default UserGreeting;
