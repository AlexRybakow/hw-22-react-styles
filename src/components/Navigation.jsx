import React from 'react';
import { NavLink } from 'react-router-dom'

const links = [{
    to:'/hw-22-react-styles/',
    label:'Home Page'
},
{
    to:'/hw-22-react-styles/signin',
    label:'Sign In'
},
{
    to:'/hw-22-react-styles/signup',
    label:'Sign Up'
},
]

const NavBar = () => (
    <nav className="navigation">
        <ul className="flex">
            {links.map(link => (
               <li className="navigation-item" key={link.to}>
                   <NavLink exact to={link.to}>{link.label}</NavLink>
               </li> 
            ))}
        </ul>
    </nav>
)

export default NavBar;