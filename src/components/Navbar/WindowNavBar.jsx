import React, { useState } from 'react'
import style from "../../css/NavBar.module.css"
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import vicuna_logo from "../../image/vicuna_logo.png"

const WindowNavBar = () => {
    const [open, setOpen] = useState(false)

    return (
        <div className={style.mainContainer}>
            <div className={style.NavContainer}>
                <div className={style.NavLeftContainer}>
                    <div className={style.logoContainer}>
                        <img src={vicuna_logo} alt="" height="60%" width="60%" /></div>
                    <div className={style.navList}>
                        <h2>HOME</h2>
                        <div className={style.dropdownMain} onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
                            <div className={style.dropdownProduct}><h2 style={{ margin: "0 5px 0 15px" }}>PRODUCTS</h2><ExpandMoreIcon /></div>
                            <div className={open ? `style.dropdown ${style.activeDropdown} ` : style.dropdown}>
                                <div className={style.dropdownItemContainer}>
                                    <h3 className={style.dropdownItem}>Scholaebot</h3>
                                </div>
                                <div className={style.dropdownItemContainer}>
                                    <h3 className={style.dropdownItem}>Scholaebot API</h3>
                                </ div>
                            </div>
                        </div>
                        <h2>PRICING</h2>
                        <h2>ABOUT US</h2>
                    </div>
                </div>
                <div className={style.authentication}>
                    <h2>LOGIN</h2>
                    <h2>SIGN UP</h2>
                </div>
            </div>
        </div>
    )
}

export default WindowNavBar
