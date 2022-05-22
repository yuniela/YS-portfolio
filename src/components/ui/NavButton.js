import React from 'react';
import { Burguer } from '../../styles/ButtonStyles';


export const NavButton = (props) => {
  return (
    <Burguer>
        <div  onClick={props.handleClick} 
            className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}
        >
        <span></span>
        <span></span>
        <span></span>
        </div>
    </Burguer>
  )
}


