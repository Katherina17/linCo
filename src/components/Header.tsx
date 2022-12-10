import logo from "../assets/logo.svg";
import React from "react";
import  s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
            <div className="App_wrapper">
                <div className="logo_header">
                    <img src={logo} alt='logo'/>
                </div>
            </div>
        </header>
    )
}

export default Header;