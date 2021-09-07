import React, { useState } from 'react';


const FunctionClick = (props) =>{

  const clickHandler = () =>{
    console.log('Button clicked');
  }
return(
  <div>
    <button onClick={clickHandler}>Click from Function Component</button> 
  </div>
  )
}


export default FunctionClick;