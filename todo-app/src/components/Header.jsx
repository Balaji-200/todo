import React from "react";
import logo from '../lightbulb-regular.png';

function Header() {
    return (
        <header>
            <img src={logo} height={46} width={32}/>
            <h1>Keeper</h1>
        </header>
    );
}

export default Header;
