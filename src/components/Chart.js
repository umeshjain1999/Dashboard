import React  from 'react';
import Topbar from './Topbar';


const Chart = ({name}) => {

    return (
       <div className = 'container'>
           <Topbar name = {name}/>
  
       </div>
    )
}

export default Chart
