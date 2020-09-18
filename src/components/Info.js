import React  from 'react';
import Topbar from './Topbar';


const Info = ({name}) => {

    return (
       <div className = 'container'>
           <Topbar name = {name}/>
  
       </div>
    )
}

export default Info
