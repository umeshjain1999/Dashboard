import React from 'react'
import classes from '../Setting.module.css';
import {Link} from 'react-router-dom';

const GeneralSettingsItem = ({info}) => {
    return (
            <Link to = {info.link}>
                <div className={classes.link}>
                        <img src={info.imageSource} alt="A" />
                        <div className={classes.text}>{info.name}</div>
                </div>
            </Link>
    )
}

export default GeneralSettingsItem
