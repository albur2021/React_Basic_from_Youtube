import React, { useState } from "react";

const NameList = (props) => {
  const names = ["Bruce", "Clark", "Diana"];
  const nameList = names.map((name) => <h2>{name}</h2>);

  // There are 3 ways - how to list names
  return (
    //1. using variable to list name;
    <div>{nameList}</div>

    //2. distructiring array - not advised
    //   <div>
    //     <h2>{names[0]}</h2>
    //     <h2>{names[1]}</h2>
    //     <h2>{names[2]}</h2>
    //   </div>

    //3. using .map to iterate all list of names
    // <div>
    //     {
    //         names.map(name => <h2>{name}</h2>)
    //     }
    // </div>
  );
};

export default NameList;
