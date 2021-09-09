import React, { useState } from "react";
import Person from "./Person";

const IndexAsKey = (props) => {
  const names = ["Sam", "Jenny", "Adler","Sam"];
  

  //Index as the 'key'
  //When to use index as a key?
  //1. The items in your list do not have a unique id
  //2. The list is a static list and will not change
  //3. The list will never be reordered or filtered
  const nameList = names.map((name, index) => 
    <h2 key={index}>

      {index} {name}

    </h2>
  );
  return(
    <div>{nameList}</div>
  ) 
};

export default IndexAsKey;
