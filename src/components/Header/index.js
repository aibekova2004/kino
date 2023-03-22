import React from 'react';
import logo from '../../img/logo2.png'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header">
                    <img src={logo} alt="img"/>
                    <div className="header--nav">
                        <NavLink to={"/"} className="header--nav__link">Home</NavLink>
                        <NavLink to={"/popular"} className="header--nav__link">Popular</NavLink>
                        <NavLink to={"/top_rated"} className="header--nav__link">TopRated</NavLink>
                    </div>
                    <div className="header--btn">
                        <button>Sign in</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header ;