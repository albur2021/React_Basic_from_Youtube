import React, { useState } from 'react';


const Hero = ({heroName}) =>{
    if(heroName === 'Joker' ){
        throw new Error('Not a Hero!');
    }
return(
  <div>
    <h1>{heroName}</h1>
  </div>
  )
}


export default Hero;