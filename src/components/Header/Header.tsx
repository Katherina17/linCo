import logo from "../../assets/logo.svg";
import React from "react";
import  s from './Header.module.css';
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean;
    userLogin: string | null;
}

const Header = (props: HeaderPropsType) => {
    return(
        <header className={s.header}>
            <div className="App_wrapper">
                <div className={s.headerAndLogin}>
                    <div className="logo_header">
                        <img src={logo} alt='logo'/>
                    </div>
                    {props.isAuth ? <p> {props.userLogin} </p> : <NavLink to={'login'}>Login</NavLink> }
                </div>
                </div>

        </header>
    )
}

export default Header;