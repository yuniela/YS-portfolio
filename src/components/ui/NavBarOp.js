import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavButton } from './NavButton';

export const NavBarOp = () => {
    const [clicked, setClicked] = useState(false);   
    const [clickedButton, setClickedButon] = useState(false) 
    const handleClick = () => {
        console.log(`aqui antes soy ${clicked}`)
        //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
        setClickedButon(!clickedButton)
        console.log(`aqui soy ${!clicked}`)
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

        <div className={`links ${clicked ? 'active' : ''} justify-content-left`}>
            {console.log(clicked)}
            <NavLink
                onClick={handleClick}
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
                onClick={handleClick}
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
                onClick={handleClick}
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
                onClick={handleClick}
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
          <NavButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>
      </NavContainer>
    </>
  )
}

const NavContainer = styled.nav`
  h2{
    color: white;
    font-weight: 400;
    span{
      font-weight: bold;
    }
    
  }
  padding: 2rem;   
  background-color: #03001C;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index:10;
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;
    z-index:2;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer{
    @media(min-width: 768px){
      display: none;
    }
    z-index: 2;
  }
`

const BgDiv = styled.div`
  background-color: #03001C;
  position: absolute;
  top: -1500px;
  left: -1000px;
  width: 100%;
  height: 100%;
//   opacity: 0.60;
  z-index: -1;
  transition: all .6s ease ;
  
  &.active{
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index:1;
  }
`
