import React, { useState } from 'react';


const Columns = (props) =>{
    const items = [];

return(

  <React.Fragment>
      {/* {
      items.map(item =>(
          <React.Fragment key = {item.id}> // you migh use 'key' as an attribute here
          <h1>Title</h1>
          <p>{item.title}</p>
      ))
      } */}

    <td>Name</td>
    <td>Almaz</td>
  </React.Fragment>
  
  // Empty wrap/tag - cannot have an key as an attribute
  //   <>
        //   <td>Name</td>
        //     <td>Almaz</td>
        //   </>
        
  )
}


export default Columns;