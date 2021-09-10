import React, { Component } from "react";
//Error coundaries are React components that catch JavaScript error in their child components tree
//A class component becomes an Error Boundary by defining either or both of 'getDerivedStateFromError' and 'componentDidCatch' lifecycle methods
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  // key reserved word name of function
  // this function catches 'error' and then send back 'fallback UI to let know that there is an error
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(error,info){
      console.log(error);
      console.log(info);
  }
  render() {
      if(this.state.hasError){
        return <h1>Something went wrong!</h1>
      } 
        return this.props.children
  }
}

export default ErrorBoundary;
