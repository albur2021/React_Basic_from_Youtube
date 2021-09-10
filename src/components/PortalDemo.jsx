import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const PortalDemo = (props) =>{

return ReactDOM.createPortal(
  <div>
    <h1>Portal Demo</h1>
  </div>,
  document.getElementById('portal-root')
  )
}


export default PortalDemo;