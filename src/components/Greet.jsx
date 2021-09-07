import React, { useState } from 'react';


const Greet = (props) =>{

return(
  <div>
    <h1>Id: {props.id},</h1>
    {props.children}
    <h1>Name: {props.name}, </h1>
    {props.children}
    <h1>Position: {props.job}</h1>
    {props.childrenx}
  </div>
  )
}


export default Greet;