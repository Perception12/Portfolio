import React from "react";
import "../../../styles/ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-heading heading">
        <h1>Need a Service?</h1>
        <div>Send A Message</div>
      </div>

      <form>
        <input type="text" name="" id="" placeholder="Enter Full Name" />
        <input type="email" name="" id="" placeholder="Enter Email Address" />
        <textarea
          name=""
          id=""
          cols="30"
          rows="2"
          placeholder="Write A Message"
        ></textarea>

        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
