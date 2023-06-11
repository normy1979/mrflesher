import React, { useRef } from 'react';
import '../assets/css/email.css'

export default function Email() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        // console.log(e.target.name.value)
        // console.log(e.target.email.value)
        // console.log(e.target.message.value)
        fetch('https://o3u76sz857.execute-api.us-east-1.amazonaws.com/prod/emailForwarder', {
         method: 'POST',
         body: JSON.stringify({
            name: e.target.name.value,
            phone: '',
            email: e.target.email.value,
            message: e.target.message.value
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',

         },
      })
         .then((response) => response.json())
         .then((data) => {
            console.log(data)
         })
         .catch((err) => {
            console.log(err.message);
         });
        console.log("email sent")
    };

    return (
        <>

        <div className="container" id="email_contact">
         <div className="inner-container">
            <form ref={form} onSubmit={sendEmail}>
            <div className="row">
               <div className="col-25">
                  <label htmlFor="name">Name</label>
               </div>
               <div className="col-75">
                  <input type="text" id="name" name="name" placeholder="Your name.."/>
               </div>
            </div>
            <div className="row">
               <div className="col-25">
                  <label htmlFor="email">Email</label>
               </div>
               <div className="col-75">
                  <input type="email" id="email" name="email" placeholder="Your email.."/>
               </div>
            </div>
            
            <div className="row">
               <div className="col-25">
                  <label htmlFor="message">Message</label>
               </div>
               <div className="col-75">
                  <textarea id="message" name="message" placeholder="Write a message.."></textarea>
               </div>
            </div>
            <br/>
            <div className="row">
               <input type="submit" value="Send"/>
            </div>
            
            </form>
            </div>
      </div>
        </>
      );
};

  