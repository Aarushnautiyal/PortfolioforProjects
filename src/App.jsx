import React from 'react'
import About from './components/About/About'
import Header from './components/Header/Header'
import Projects from './components/Project/Projects'
import "./style.css"

const App = () => {
    return (
        <>
            <Header/>
            <Projects/>
            <About/>
        </>
    )
}

export default App
