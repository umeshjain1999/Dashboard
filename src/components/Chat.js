import React  from 'react';
import Topbar from './Topbar';


const Chat = ({name}) => {

    return (
       <div className = 'container'>
           <Topbar name = {name}/>
  
       </div>
    )
}

export default Chat
