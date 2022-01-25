import React from 'react'
import connect from '../../images/connect.svg'
import './style.css'

const Contact = () => {
    return (
        <section className="project" id='contact'>
        <h2 className="declaration--heading">let's Connect</h2>
        <div className="wrapper flx jst">
            <div className="right--connect">
                <img src={connect} alt="" srcset="" />
            </div>
            <div className="left--connect">
                <form className='flx clmn'>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Email'/>
                    <textarea name="message" placeholder='Message' id="" cols="30" rows="2"></textarea>
                    <button className='btn'>Send</button>
                </form>
            </div>
        </div>
    </section>
    )
}

export default Contact
