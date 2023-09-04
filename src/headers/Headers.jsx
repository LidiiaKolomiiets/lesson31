import React from "react";

import MenuItem from './MenuItem.jsx';
import './headers.css'
import { Link } from "react-router-dom";


export default () => {
    return <header className="header">
      <Link to='/' >< MenuItem title = "Головна" /></Link>
      <Link to='question'>< MenuItem title = "Питання" /></Link>
      <Link to='materials'>< MenuItem title = "Матеріали" /></Link>
      <Link to='contact'>< MenuItem title = "Контакти" /></Link>
    </header>
}