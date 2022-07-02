import React, { useRef } from "react";
import Loader from "react-loaders";
import emailjs from "@emailjs/browser";
import "./contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert(`Message sent ${result.text}`);
          window.location.reload(false);
        },
        () => {
          alert("Fail to send message, Please try again");
        }
      );
  };

  return (
    <>
      <div className="section-container contact">
        <div className="contact-text__zone">
          <h1>Contact Me</h1>
          <div className="contact-form">
            <form className="pt-4" ref={form} onSubmit={sendEmail}>
              <ul className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <li className="w-1/2">
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Your Name"
                      className="w-full"
                      required
                    />
                  </li>
                  <li className="w-1/2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="w-full"
                      required
                    />
                  </li>
                </div>
                <li className="w-full">
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full"
                    required
                  />
                </li>
                <li className="w-full">
                  <textarea
                    name="message"
                    placeholder="Your Message..."
                    className="w-full"
                    required
                  ></textarea>
                </li>
                <li>
                  <button className="contact-btn">Send</button>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      ;
      <Loader type="pacman" />
    </>
  );
};

export default Contact;
