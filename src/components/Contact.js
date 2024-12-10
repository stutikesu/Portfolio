import React, { useState } from 'react';

const Contact = () => {
  const [messageStatus, setMessageStatus] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Replace 'YOUR_GOOGLE_SHEET_URL' with your actual endpoint URL.
    fetch('YOUR_GOOGLE_SHEET_URL', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setMessageStatus('Message sent successfully!');
        e.target.reset();
      })
      .catch(() => {
        setMessageStatus('Error sending message. Please try again.');
      });
  };

  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="contact-left">
            <h1 className="sub-title">Contact Me</h1>
            <p style={{ textDecoration: 'none' }}>
              <i className="fa-solid fa-paper-plane"></i>
              <a href="mailto:stutikesarwani123@gmail.com">
                <b style={{ textDecoration: 'none' }}>stutikesarwani123@gmail.com</b>
              </a>
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> 9653052697
            </p>
            <div className="social-icons">
              <a href="https://github.com/stutikesu">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/stuti-kesarwani-519107240/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <a href="/images/StutiKesarwani-Resume.pdf" download className="btn btn2">
              Download Resume
            </a>
          </div>
          <div className="contact-right">
            <form onSubmit={handleFormSubmit} name="submit-to-google-sheet">
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn btn2">Submit</button>
            </form>
            {messageStatus && <span id="msg">{messageStatus}</span>}
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>
          Copyright © Stuti Kesarwani. Made with <i className="fa-solid fa-heart"></i>
        </p>
      </div>
    </div>
  );
};

export default Contact;
