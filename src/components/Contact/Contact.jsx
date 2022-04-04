import React,{useState} from 'react'
import connect from '../../images/connect.svg'
import emailjs from 'emailjs-com'
import './style.css'

const Contact = () => {

    const [showNotification, setShowNotification] = useState(false)
    const [message, setMessage] = useState("thank you for contacting i'll be in touch")
    function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zalfq1n",
        "template_2wiemyw",
        e.target,
        "user_vBrUxJPSRpUGjPrF2JNzW",
      )
      .then(
        (result) => {
          // console.log(result.text);
          setMessage("thank you for contacting i'll be in touch")
          setShowNotification(true)
        },
        (error) => {
          // console.log(error.text);
          setMessage("Internal Server Error")
        }
      );
      e.target.reset()
      // const data = {}
      // setFormData(data)
    //   alert("thank you for contacting i'll be in touch");
  }

  // const handleChange=(e)=>{
  //   const {name,value} = e.target
    
  //   setFormData(prev=>({
  //     ...prev,
  //     [name]:value
  //   }))
  // }
//   Email
    return (
        <section className="project" id='contact'>
        <h2 className="declaration--heading">let's Connect</h2>
        <div className="wrapper2 flx jst">
            <div className="right--connect">
                <img src={connect} alt=""/>
            </div>
            <div className="left--connect">
                <form className='flx clmn' onSubmit={sendEmail}>
                    <input type="text" placeholder='Name' name='name' required/>
                    <input type="email" placeholder='Email' name='email' required/>
                    <textarea name="message" type='message' placeholder='Message' id="" cols="30" rows="2"></textarea>
                    <button className='btn'>Send</button>
                </form>
            </div>
        </div>
       {showNotification&& <div className="notify">
            {message}
            <span onClick={()=>setShowNotification(false)}>X</span>
        </div>}
    </section>
    )
}

export default Contact
