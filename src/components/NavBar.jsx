import React from 'react'
import useWindowSize from "../hooks/useWindowSize"
import WindowNavBar from "./Navbar/WindowNavBar"
import SmallNavBar from './Navbar/SmallNavBar'

const NavBar = () => {
    const size = useWindowSize();

    return (
        <>
            {size.width > 854 ? <WindowNavBar /> : <SmallNavBar />}
        </>
    )
}

export default NavBar
