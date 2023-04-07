import React, {useContext, useState} from 'react';
import logo from '../../img/logo2.png'
import {Link, NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../../context";
import {CiLight} from "react-icons/ci";
import {MdOutlineNightlightRound} from "react-icons/md";

const Header = () => {
    const [search,setSearch] = useState("")
    const {setLanguage} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const nav = useNavigate()
    return (
        <div id="header" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <div className="header">
                    <Link to={"/"}>
                        <img src={logo} alt="img"/>
                    </Link>
                    <div className="header--nav">
                        <NavLink to={"/"} className="header--nav__link" style={{
                            color: dark === true ? "white" : "black"
                        }}>Home</NavLink>
                        <NavLink to={"/popular"} className="header--nav__link" style={{
                            color: dark === true ? "white" : "black"
                        }}>Popular</NavLink>
                        <NavLink to={"/top_rated"} className="header--nav__link" style={{
                            color: dark === true ? "white" : "black"
                        }}>TopRated</NavLink>
                    </div>
                    <select onChange={(e) => setLanguage(e.target.value)}>
                        <option value="en-US">English</option>
                        <option value="ru-RU">Русский</option>
                        <option value="fr-FR">France</option>
                    </select>
                    <div className="header--btn">
                        <input type="text" style={{
                            background: dark === true ? "white" : "black",
                            color: dark === true ? "black" : "white"
                        }
                        }/>
                        <button>Search</button>
                    </div>
                    <div className="header--dark">
                        <button onClick={() => setDark(false)}><CiLight/></button>
                        <button onClick={() => setDark(true)}><MdOutlineNightlightRound/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header ;

