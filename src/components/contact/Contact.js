import { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_4jtsgrk",
        "template_2afgs2a",
        formRef.current,
        "user_w5jiRcVePCVkesL7odrzX"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setMessage("");
          setName("");
          setSubject("");
          setEmail("");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Connect to discuss more</h1>
          <div className="c-info">
            <div className="c-info-item">
              <i className="fas fa-phone c-icon"></i> IN: +64-226911020 <br/> NZ:
              +91-9354429082
            </div>
            <div className="c-info-item">
              <i className="fas fa-envelope-open-text c-icon"></i>{" "}
              uditchoudhary@gmail.com
            </div>
            <div className="c-info-item">
              <i className="fas fa-map-marker-alt c-icon"></i> Auckland, New
              Zealand
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>How I can help?</b> <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            accusamus id, sunt repellat mollitia vel.
          </p>

          <form ref={formRef} onSubmit={handleFormSubmit}>
            <input
              type="text"
              placeholder="name"
              name="user_name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="subject"
              name="user_subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <input
              type="text"
              placeholder="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              rows="5"
              placeholder="message"
              name="user_message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button>Submit</button>
            {sent && (
              <span>
                Thank you for your message, I will get back to you shortly
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
