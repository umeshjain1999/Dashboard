import React from 'react';
import Topbar from './Topbar';
import classes from './Setting.module.css';
import Users from './setting-icons/users.svg';
import Tags from './setting-icons/tags.svg';
import Dialogues_1 from './setting-icons/permissions.svg';
import Intents from './setting-icons/intents.svg';
import Carriers from './setting-icons/carriers.svg';
import Import from './setting-icons/import.svg';
import Permissions from './setting-icons/permissions.svg';
import GeneralSettingsItem from './settings/GeneralSettingsItem';


const Container = ({name}) => {
    const GeneralItem = [

        {imageSource : Users , link : '/settings' ,name:'Users'},
        {imageSource : Tags , link : '/settings' ,name:'Tags'},
        {imageSource : Dialogues_1 , link : '/settings/dialogues' ,name:'Dialogues'},
        {imageSource : Intents , link : '/settings' ,name:'Intents'},
        {imageSource : Carriers , link : '/settings' ,name:'Carriers'},
        {imageSource : Import , link : '/settings' ,name:'Import Histories'},
        {imageSource : Permissions , link : '/settings' ,name:'Permissions'},
    
    ]
    return (
        <div className = 'container' >

            <Topbar name = {name}/>

            <div className="menu-contain">
            <div className={classes.setting}>
                                <div className = {classes.general_text}>
                                    GENERAL SETTINGS
                                </div>
                                <div className={classes.links}>
                                        {
                                            GeneralItem.map((info,index)=>{
                                                return(<GeneralSettingsItem info = {info} key = {index}/>)
                                            })
                                        }
                                </div>
                            </div>
            </div>
        </div>
    )
}

export default Container 
