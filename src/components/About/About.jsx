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
                    <h2 className='txt-align'>Heading</h2>
                    <h3 className="about--para">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium asperiores 
                    possimus quae placeat sequi? Explicabo ratione tenetur provident ex 
                    voluptas itaque iste dolore, totam sapiente, veniam quaerat et deserunt amet!
                    </h3>
                </div>                
            </div>
        </section>
    )
}

export default About
