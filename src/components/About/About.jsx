import React from 'react'
import story from '../../images/about.svg'
import './style.css'

const About = () => {
    return (
        <section className="about" id='about'>
            <h2 className="declaration--heading">About</h2>
            <div className="about--wrap flx">
                <div className='abt--left'>
                    <img src={story} className='story' alt='about'/>
                </div> 
                <div className='abt--right'>
                    <h2 className='txt-align'>A Misfit</h2>
                    <h3 className="about--para">
                    "Why bother in fittinng in When You can fit out"
                    </h3>
                    <h3 className='about--para ltr'>A Tech Guy with Lot's of Energy and X2 enthusiasm towards tech. <br/>If you wanna build something and want someone who can shape your ideas and make something better out of it. You are at the right Place, So what you waiting For let's connect drop a message below</h3>
                </div>                
            </div>
        </section>
    )
}

export default About
