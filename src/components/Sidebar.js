import React from 'react';
import Logo from './sidebar-icons/logo.svg';
import Chat from './sidebar-icons/chat.svg';
import Chart from './sidebar-icons/pie-chart.svg';
import Laptop from './sidebar-icons/laptop.svg';
import Work from './sidebar-icons/work.svg';
import Users from './sidebar-icons/users.svg';
import Settings from './sidebar-icons/settings.svg';
import Menu from './sidebar/Menu';

const Sidebar = () => {


const menuItem = [

    {imageSource : Chat , link : '/chat'},
    {imageSource : Chart , link : '/chart'},
    {imageSource : Laptop , link : '/info'},
    {imageSource : Work , link : '/work'},
    {imageSource : Users , link : '/users'},
    {imageSource : Settings , link : '/settings'},

]
    return (
        <div className = 'sidebar'>
            <div className="logo">
                <img src= {Logo} alt="X" />
            </div>
            <div className="menu">
                {menuItem.map((item,index)=>{
                    return (<Menu item = {item} key = {index}/>)
                })}
            </div>
        </div>
    )
}

export default Sidebar
