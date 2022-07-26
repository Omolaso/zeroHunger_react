import React from 'react';
import '../styles/Contact.css';


const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Get In Touch</h1>
      <p>Our inboxes are always open.</p>
      <div className="contact-btns">
        <a href="mailto:adextee001@gmail.com" target="_blank" rel="noopener noreferrer">Contact Tobi</a>
        <a href="mailto:unyimeusen01@gmail.com" target="_blank" rel="noopener noreferrer">Contact Unyime</a>
      </div>
    </div>
  )
}

export default Contact