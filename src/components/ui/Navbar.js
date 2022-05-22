import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
      <>
            <div className="navbar navbar-expand-sm navbar-dark bg-dark">

                <div className="navbar-nav justify-content-left devname">
                    <NavLink
                        style={({ isActive }) =>
                            isActive
                            ? {
                                color: '#6fe7e2',
                                textDecoration: 'none'
                                }
                            : { color: 'white' }
                        } 
                        className= { ({isActive}) => "nav-item nav-link" + ( isActive ? 'active': '' )}
                        to="/"
                    >
                        <img src= "./assets/ysbrand.png" width="40" height="40" className="d-inline-block align-top logo" alt=""/>
                        Yuniela Solorzano
                    </NavLink>
                </div>

                <div className="navbar-collapse dual-collapse2 justify-content-end">

                    <div className= "navbar-nav menu-choices">
                        <NavLink
                            style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#6fe7e2',
                                    textDecoration: 'none'
                                    }
                                : { color: 'white' }
                            } 
                            className= { ({isActive}) => "nav-item nav-link" + ( isActive ? 'active': '' )}
                            to="/"
                        >
                            Home
                        </NavLink>
                    </div>
                    
                    <div className= "navbar-nav menu-choices">
                        <NavLink
                            style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#6fe7e2',
                                    textDecoration: 'none'
                                    }
                                : { color: 'white' }
                            } 
                            className= { ({isActive}) => "nav-item nav-link" + ( isActive ? 'active': '' )}
                            to="/projects"
                        >
                            Projects
                        </NavLink>
                    </div>

                    <div className= "navbar-nav menu-choices">
                        <NavLink
                            style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#6fe7e2',
                                    textDecoration: 'none'
                                    }
                                : { color: 'white' }
                            } 
                            className= { ({isActive}) => "nav-item nav-link" + ( isActive ? 'active': '' )}
                            to="/resume"
                        >
                            Resume
                        </NavLink>
                    </div>

                    <div className= "navbar-nav menu-choices ">
                        <NavLink
                            style={({ isActive }) =>
                                isActive
                                ? {
                                    color: '#6fe7e2',
                                    textDecoration: 'none'
                                    }
                                : { color: 'white' }
                            } 
                            className= { ({isActive}) => "nav-item nav-link" + ( isActive ? 'active': '' )}
                            to="/contact"
                        >
                            Contact
                        </NavLink>
                    </div>
                </div>

            </div>
      </>
  )
}
