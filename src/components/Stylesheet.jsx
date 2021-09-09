import React, { useState } from 'react';
import '../styleCss/myStyle.css';

const Stylesheet = (props) =>{
 let className = props.primary ? 'primary' : '';
return(
  <div>
    <h1 className={` ${className} font-xl`}>Stylesheet</h1>
  </div>
  )
}


export default Stylesheet;