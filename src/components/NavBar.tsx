import React from "react";
import s from './NavBar.module.css';

const NavBar = () => {
    return(
        <nav className={s.nav_bar}>
            <ul className={s.nav_list}>
                <li> <a href="#"> Profile </a></li>
                <li> <a href="#">Messages </a></li>
                <li> <a href="#">News </a></li>
                <li> <a href="#">Music </a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </nav>
    )
}

export default NavBar;