import React, { useState } from 'react';
//
//React. memo is a higher order component. 
//If your component renders the same result given the same props, 
//you can wrap it in a call to React. memo 
//for a performance boost in some cases by memoizing the result. This means that React will skip rendering the component, and reuse the last rendered result.

const MemoComp = ({name}) =>{
console.log('Rendering Memo Component');
return(
  <div>
    <h1>{name}</h1>
  </div>
  )
}


export default React.memo(MemoComp);