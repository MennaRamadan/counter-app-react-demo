import React, { Component } from 'react';

//stateless function component as it has no state or handling events 
const NavBar = ({totalCounter}) => {
    return ( 
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar 
                 <span className="badge badge-pill badge-secondary m-2">{totalCounter}</span></a>
            </nav>
        </div> 
     );
}
 
export default NavBar;