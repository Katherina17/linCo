import React from "react";
import s from './NavBar.module.css';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const NavBar = () => {
    return(
        <nav className={s.nav_bar}>
            <ul className={s.nav_list}>
                <li>
                    <div className={s.person_icon_container}>
                        <PersonOutlineOutlinedIcon sx={{ fontSize: 16, cursor: 'pointer'}} />
                        <a href="/profile"> Profile </a>
                    </div>
                </li>
                <li>
                    <div className={s.person_icon_container}>
                        <EmailOutlinedIcon sx={{ fontSize: 16, cursor: 'pointer'}} />
                        <a href="/dialogs">Messages </a>
                    </div>
                </li>
                <li>
                    <div className={s.person_icon_container}>
                        <FeedOutlinedIcon sx={{ fontSize: 16, cursor: 'pointer'}} />
                        <a href="/news">News </a>
                    </div>
                </li>
                <li>
                    <div className={s.person_icon_container}>
                        <AudiotrackOutlinedIcon sx={{ fontSize: 16, cursor: 'pointer'}} />
                        <a href="/music">Music </a>
                    </div>
                </li>
                <li>
                    <div className={s.person_icon_container}>
                        <SettingsOutlinedIcon sx={{ fontSize: 16, cursor: 'pointer'}} />
                        <a href="/settings">Settings</a>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;