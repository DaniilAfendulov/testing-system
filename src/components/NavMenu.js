import React, {useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const navItems = props.items ? props.items : {to:"/", label:"Home"};
  const toggleNavbar = () => {
    setCollapsed(!collapsed);
  }

  return (
    <header>
      <div className="navbar navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3 light" >
        <div>
          <NavLink className='navbar-brand' to="/">Элементы UI</NavLink>
          <div onClick={toggleNavbar} className="mr-2 navbar-toggler" />
          <div className="navbar collapse d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} >
            <ul className="navbar-nav flex-grow">
                {navItems.map((item) => 
                 <div className='nav-item'>
                    <NavLink className="text-dark nav-link" to={item.to}>{item.label}</NavLink>
                  </div>
                )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default NavMenu;