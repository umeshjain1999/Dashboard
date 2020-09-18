import React from 'react'
import {Link} from 'react-router-dom';

const Topbar = ({name}) => {
    return (
       
            <nav>
                <Link to = '/settings'>
                    <div className="menu-name">
                        {name}
                    </div>
                </Link>                
                <div className="user">
                    <div className="name">Admin</div>
                    <div className="user-icon">A</div>
                </div>
           </nav>
        
    )
}

export default Topbar
