import React from 'react'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Projects from './components/Project/Projects'
import "./style.css"

const App = () => {
    return (
        <>
            <Header/>
            <Projects/>
            <About/>
            <Contact/>
            <a href="#home"><button className='tip' id='home'></button></a>
        </>
    )
}

export default App
