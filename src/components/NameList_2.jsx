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
     <Person person = {person}></Person>
  ))
return(
  <div>
    {personList}
  </div>
  )
}


export default NameList_2;