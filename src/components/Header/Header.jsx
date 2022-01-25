import React from 'react'
import Logo from "../../images/portLogo.png"
import MainPoster from '../../images/mainPost.png'

const Header = () => {
    return (
         <header className="header" id='home'>
            <nav className="flx navigation">
                <img src={Logo} alt=""/>
                <ul className="flx">
                    <a href="#home">
                        <li className="mgr1">Home</li>
                    </a>
                    <a href="#projects">
                        <li className="mgr1">Projects</li>
                    </a>
                    <a href="#about">
                        <li className="mgr1">About</li>
                    </a>
                    <a href="#contact">
                        <li className="mgr1">Contact</li>
                    </a>
                </ul>
            </nav>
            <div className="wrapper flx">
                <div className="left">
                    <img src={MainPoster} alt="" />
                </div>
                <div className="right">
                    <span className="intro">- Introduction</span>
                    <h1 className="landing--text">Software Designer and <br/> Devloper, based in <br/> Uttrakhand.</h1>
                    <br/><br/><br/><br/>
                    <a href="#about"><button>Know More</button></a>
                </div>
            </div>
        </header>
    )
}

export default Header
