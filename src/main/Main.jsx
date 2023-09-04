import React from "react";

import './main.css'

import Logo from './Logo.jsx';
import Description from "./Description.jsx";

export default () => {
    return <main className="main">
        <Description/>
        < Logo/>
    </main>
}