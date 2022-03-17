import React,{useState} from 'react'
import connect from '../../images/connect.svg'
import emailjs from 'emailjs-com'
import './style.css'

const Contact = () => {

    const [showNotification, setShowNotification] = useState(false)
    function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zalfq1n",
        "template_2wiemyw",
        e.target,
        "user_vBrUxJPSRpUGjPrF2JNzW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setShowNotification(true)
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
    //   alert("thank you for contacting i'll be in touch");
  }
//   Email
    return (
        <section className="project" id='contact'>
        <h2 className="declaration--heading">let's Connect</h2>
        <div className="wrapper2 flx jst">
            <div className="right--connect">
                <img src={connect} alt=""/>
            </div>
            <div className="left--connect">
                <form className='flx clmn' onSubmit={(e)=>sendEmail(e)}>
                    <input type="text" placeholder='Name'/>
                    <input type="text" placeholder='Email'/>
                    <textarea name="message" placeholder='Message' id="" cols="30" rows="2"></textarea>
                    <button className='btn'>Send</button>
                </form>
            </div>
        </div>
       {showNotification&& <div className="notify">
            thank you for contacting i'll be in touch
            <span onClick={()=>setShowNotification(false)}>X</span>
        </div>}
    </section>
    )
}

export default Contact
