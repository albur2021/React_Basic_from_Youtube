import React, { useState } from 'react';


const ChildComponent = (props) =>{

//*** Note in return if you want to pass the parameter inside of method, use arror function ()=>
return(
  <div>
    <button onClick={()=>props.greetHandler('Child Component')}>Greet Parent</button>
  </div>
  )
}


export default ChildComponent;