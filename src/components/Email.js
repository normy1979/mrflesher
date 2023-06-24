import React, { useRef } from 'react';
import '../assets/css/email.css'

export default function Email() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        fetch('https://o3u76sz857.execute-api.us-east-1.amazonaws.com/prod/emailForwarder', {
         method: 'POST',
         body: JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
            phone: ''
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
        alert("Thanks for reaching out! I'll get back to you shortly");
        console.log("email sent")
        document.getElementById("emailForm").reset();
        window.location.href = "#";
    };

    return (
        <>

        <div className="container" id="email_contact">
         <div className="inner-container">
            <form ref={form} onSubmit={sendEmail} id="emailForm">
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

  