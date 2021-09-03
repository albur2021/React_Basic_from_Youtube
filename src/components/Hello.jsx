import React, { useState } from 'react';


const Hello = (props) =>{

// return(
//   <div id='hello' className='dummyClass>
//     <h1>Test</h1>
//   </div>
//   )
return React.createElement('div',{id:'Hello',className:'dummyClass'}, 
React.createElement('h1',null, 'Test'));
}


export default Hello;