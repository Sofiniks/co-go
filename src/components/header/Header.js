import React from 'react'
import classes from './header.module.scss'
import logo from '../../img/logo.svg'
import arrow from '../../img/switch-arrow.svg'

const Header = ({onClick, active}) => {
    const switchClassName = active ? `${classes.switch_btn} ${classes.switch_btn_active}` : `${classes.switch_btn}`;
    const switchLanguageClassName = active ? `${classes.languageChange} ${classes.languageChange_active}` : `${classes.languageChange}`;
    return (
        <header className={classes.header}>
            <div className={classes.header_logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className="translate_btn">
                <button type="button" className={switchClassName} onClick={onClick}>
                    Ru
                <img src={arrow} alt="arrow"/>
                </button>
                <div className={classes.languageChangeSection}>
                    <button type="button" className={switchLanguageClassName} name="en">En</button>
                </div>
            </div>
        </header>
    )
}

export default Header;