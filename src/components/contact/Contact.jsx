import React from "react";
import Loader from "react-loaders";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <div className="section-container contact">
        <div className="contact-text__zone">
          <h1>Contact Me</h1>
          <div className="contact-form">
            <form className="pt-4">
              <ul className="flex flex-col gap-6">
                <div className="flex gap-4">
                  <li className="w-1/2">
                    <input
                      type="text"
                      name="name"
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
