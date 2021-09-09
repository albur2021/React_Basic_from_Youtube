import React, { useState } from 'react';
import Person from './Person';


const NameList_2 = (props) =>{
  
    const persons = [
        {
          id: 1,
          name:'Sam',
          age: 30,
          skill: 'React'
        },
        {
            id:2,
            name:'Jenny',
            age:43,
            skill:'Angular'
        },
        {
            id:3,
            name:'Adler',
            age: 23,
            skill: 'Djengo'
        }
  ];
  const personList = persons.map(person =>(
      //A ‘key’ is a special string attribute you need to include when creating lists of elemenents
      //A 'key' give the elemenents a stable identity
      //A 'key' help React identify which items have changed, are added, or are removed
     <Person key={person.id} person = {person}></Person>
  ))
return(
  <div>
    {personList}
  </div>
  )
}


export default NameList_2;