import React from "react";
import s from './NavBar.module.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return(
        <nav className={s.nav_bar}>
            <ul className={s.nav_list}>
                <li>
                    <div className={s.person_icon_container}>
                        <PersonOutlineOutlinedIcon sx={{ fontSize: 16, cursor: 'pointer'}} />
                        <NavLink to="/profile"> Profile </NavLink>
                    </div>
                </li>
                <li>
                    <div className={s.person_icon_container}>
                        <EmailOutlinedIcon sx={{ fontSize: 16, cursor: 'pointer'}} />
                        <NavLink to="/dialogs">Messages </NavLink>
                    </div>
                </li>
                <li>
                    <div className={s.person_icon_container}>
                        <FeedOutlinedIcon sx={{ fontSize: 16, cursor: 'pointer'}} />
                        <NavLink to="/news">News </NavLink>
                    </div>
                </li>
                <li>
                    <div className={s.person_icon_container}>
                        <AudiotrackOutlinedIcon sx={{ fontSize: 16, cursor: 'pointer'}} />
                        <NavLink to="/music">Music </NavLink>
                    </div>
                </li>
                <li>
                    <div className={s.person_icon_container}>
                        <SettingsOutlinedIcon sx={{ fontSize: 16, cursor: 'pointer'}} />
                        <NavLink to="/settings">Settings</NavLink>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;