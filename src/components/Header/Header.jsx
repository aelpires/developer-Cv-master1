import React from "react";
import './Header.css';
/* ReactScroll */
import { Link } from 'react-scroll';

/* React router */
import { NavLink } from 'react-router-dom';

/* DarkMode */
import DarkMode from '../DarkMode/DarkMode';

/* Language */
import { FormattedMessage } from "react-intl";


const Header = () => {

    // Menu 
    const menuDesdoblavel = () => {
        let navbar = document.querySelector('.navbar');
        navbar.classList.toggle("activar");

        window.onscroll = () => {
            if (window.scrollY > 0) {
                document.querySelector(".site-header").classList.add("activar")
            } else document.querySelector(".site-header").classList.remove("activar")

            navbar.classList.remove("activar")
        }
    }

    return (
        <header className="site-header">
            <div id="menu-btn" className="fas fa-bars" onClick={menuDesdoblavel}></div>

            <NavLink className="logo" to="/">
                <p><span>Alexandre Pires</span></p>
            </NavLink>

            <nav className="navbar">
                <Link to="inicio" spy={true} offset={-150} href="#inicio">
                    <FormattedMessage
                        id='home'
                        defaultMessage='Home'
                    />
                </Link>
                <Link to="sobre-mim" spy={true} offset={-150} href="#sobre-mim">
                    <FormattedMessage
                        id='about'
                        defaultMessage='About me'
                    />
                </Link>
                <Link to="servicos" spy={true} offset={-150} href="#servicos">
                    <FormattedMessage
                        id='services'
                        defaultMessage='Services'
                    />
                </Link>
            </nav>
            <div className="switch" id="switch">
                <DarkMode />
            </div>
        </header>
    )
}

export default React.memo(Header);