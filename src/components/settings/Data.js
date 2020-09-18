import React from 'react';
import classes from './Dialogues.module.css';
import Download from './dialogues-icons/downlaod.svg';
import Upload from './dialogues-icons/upload.svg';
import Edit from './dialogues-icons/edit.svg';
import Copy from './dialogues-icons/copy.svg';
import Add from './dialogues-icons/add.svg';
const Data = ({name}) => {
    return (
        <div className={classes.data}>
                <div className={classes.name}>
                    {name}
                </div>
                <div className={classes.kind}>
                    MESSENGER
                </div>
                <div className={classes.brand}>
                    HRA
                </div>
                <div className={classes.export_import}>
                    <img src={Download} alt="" />
                    <img src={Upload} alt="" />
                </div>
                <div className={classes.actions}>
                    <img src={Edit} alt="" />
                    <img src={Copy} alt="" />
                    <img src={Add} alt="" />
                    <img src={Copy} alt="" />
                    <img src={Add} alt="" />
                </div>
    </div>
    )
}

export default Data
