import React from "react";
import "../../styles/Contact.css";
import ContactForm from "../Forms/ContactForm/ContactForm";
import linkedIn from "../../assets/linkedIn.svg";
import twitter from "../../assets/twitter.svg";
import message from '../../assets/message.svg';
import phone from '../../assets/phone.svg';

const Contact = ({tLink, lnLink}) => {
  return (
    <div className="contact" id="contact">
      <div className="contact-l">
        <div className="heading">
          <div>Get In Touch.</div>
          <p>I'm Available 🙂</p>
          
          <div className="social-links">
          <a href={lnLink}
          target="_blank"
          rel="noreferrer"
          >
            <img src={linkedIn} alt="linkedIn" />
          </a>

          <a href={tLink}
          target="_blank"
          rel="noreferrer"
          >
            <img src={twitter} alt="twitter" />
          </a>
        </div>
        </div>

        <div className="contact-info">
            <img src={message} alt="" />
            <div>
                <div className="info">kehindeadejumobi82@gmail.com</div>
                <div>Send a message anytime</div>
            </div>
        </div>

        <div className="contact-info">
            <img src={phone} alt="" />
            <div>
                <div className="info">+2347-0302-55420</div>
                <div>Send a message anytime</div>
            </div>
        </div>
      </div>

      <div className="contact-r">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
