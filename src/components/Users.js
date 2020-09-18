import React  from 'react';
import Topbar from './Topbar';


const Users = ({name}) => {

    return (
       <div className = 'container'>
           <Topbar name = {name}/>
  
       </div>
    )
}

export default Users
