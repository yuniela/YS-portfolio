import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NavContainer, BgDiv } from '../../styles/NavBarStyles';
import { NavButton } from './NavButton';

export const NavBarOp = () => {
    
  const [open, setOpen] = useState(false);   
  
  const handleClick = () => {
        
    setOpen(!open);
  }

  const handleClose = () =>{
    setOpen(false)
  }

  return (
    <>
      <NavContainer>
          <h2
            style={{
            color: 'white',
            textDecoration: 'none',
            fontSize: '2rem',
            fontFamily: 'Helvetica Now',
            fontWeight: 'bold' 
            }
        } 
          >YS</h2>

        <div className={`links ${open ? 'active' : ''} justify-content-left`}>
            {console.log(open)}
            <NavLink
                
                onClick={handleClose}
                style={({ isActive }) =>
                    isActive
                    ? {
                        color: 'white',
                        textDecoration: 'none',
                        fontSize: '2rem',
                        fontFamily: 'Helvetica Now',
                        fontWeight: 'bolder'
                        }
                        : { color: '#E5E7E9', fontSize: '2rem', fontFamily: 'Helvetica Now', fontWeight: 'bold'}
                    } 
                    className= { ({isActive}) => "nav-item nav-link" + ( isActive ? 'active': '' )}
                    to="/"

            >
                Home
            </NavLink>

            <NavLink
                onClick={handleClose}
                style={({ isActive }) =>
                    isActive
                    ? {
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '2rem',
                    fontFamily: 'Helvetica Now',
                    fontWeight: 'bolder'
                    }
                    : { color: '#E5E7E9', fontSize: '2rem', fontFamily: 'Helvetica Now', fontWeight: 'bold' }
                } 
                className= { ({isActive}) => "nav-item nav-link" + ( isActive ? 'active': '' )}
                to="/projects"
            >
                Projects
            </NavLink>
                        
            <NavLink
                onClick={handleClose}
                style={({ isActive }) =>
                    isActive
                    ? {
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '2rem',
                    fontFamily: 'Helvetica Now',
                    fontWeight: 'bolder'
                    }
                    : { color: '#E5E7E9', fontSize: '2rem', fontFamily: 'Helvetica Now', fontWeight: 'bold' }
                    
                } 
                className= { ({isActive}) => "nav-item nav-link" + ( isActive ? 'active': '' )}
                            to="/resume"
            >
                Resume
            </NavLink>

            <NavLink
                onClick={handleClose}
                style={({ isActive }) =>
                    isActive
                    ? {
                    color: 'white',
                    textDecoration: 'none',
                    fontSize: '2rem',
                    fontFamily: 'Helvetica Now',
                    fontWeight: 'bold' 
                    }
                    : { color: '#E5E7E9', fontSize: '2rem', fontFamily: 'Helvetica Now', fontWeight: 'bold' }
                } 
                className= { ({isActive}) => "nav-item nav-link" + ( isActive ? 'active': '' )}
                to="/contact"
            >
                Contact
            </NavLink>
        </div>
        <div className='burguer'>
          <NavButton open={open} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${open ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}


