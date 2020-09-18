import React  from 'react'
import {NavLink} from 'react-router-dom';

const Menu = ({item}) => {

    return (
        <div>
           <NavLink to = {item.link}  activeClassName= 'active' className = 'menu-item'>
               <div >
                   <img src={item.imageSource} alt = 'X'/>
               </div>
           </NavLink> 
        </div>
    )
}

export default Menu
