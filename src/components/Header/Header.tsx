import logo from "../../assets/logo.svg";
import React from "react";
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import {Button} from "../Button/Button";

type HeaderPropsType = {
    isAuth: boolean;
    userLogin: string | null;
    logOut: () => void
}

const Header = (props: HeaderPropsType) => {

    const logOutOnClickHandler = () => {
        props.logOut()
    }

    return (
        <header className={s.header}>
            <div className="App_wrapper">
                <div className={s.headerAndLogin}>
                    <div className="logo_header">
                        <img src={logo} alt='logo'/>
                    </div>
                    {props.isAuth ? <div className={s.loginAndLigOut}>
                        <p> {props.userLogin} </p>
                        <Button name={'log Out'}  callBack={logOutOnClickHandler} className={s.logOutBtn}/>
                    </div> : <NavLink to={'login'}>Login</NavLink>}
                </div>
            </div>
        </header>
    )
}

export default Header;