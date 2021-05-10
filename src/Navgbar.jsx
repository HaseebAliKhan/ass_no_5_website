import React from 'react';
import { NavLink } from "react-router-dom"
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
function Navgbar() {
  return (
    <div >

      <nav className='navbar navbar-expand-lg navbar-light '>
        <div className='container-fluid'>
          <NavLink  className='navbar-brand m-lg-auto1'  to='/'>
            HAK'sCode
          </NavLink>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon '></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav m-lg-auto'>
              <li className='nav-item'>
                <NavLink exact activeClassName="menu_active" className='nav-link active' aria-current='page' to='/'>
                  Home
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink activeClassName="menu_active" className='nav-link' to='/service'>
                 Services
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink activeClassName="menu_active" className='nav-link' to='/about'>
                 About
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink activeClassName="menu_active" className='nav-link' to='/contact'>
                  Contact
                </NavLink>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navgbar;
