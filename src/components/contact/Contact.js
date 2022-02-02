import { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID,
        "template_2afgs2a",
        formRef.current,
        process.env.REACT_APP_USER_ID
      )
      .then(
        (result) => {
          setIsLoading(false);
          setSent(true);
          setMessage("");
          setName("");
          setSubject("");
          setEmail("");
          event.target.reset();
        },
        (error) => {
          setIsLoading(false);
          setError(true);
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
              <i className="fas fa-phone c-icon"></i> IN: +64-226911020 <br />{" "}
              NZ: +91-9354429082
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
              required
            />
            <input
              type="text"
              placeholder="subject"
              name="user_subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              rows="5"
              placeholder="message"
              name="user_message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button>
              {isLoading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Loading
                </>
              ) : (
                "Submit"
              )}
            </button>
            {sent && (
              <span>
                {error
                  ? "Oops! Failed to send the message. Please try again later or give me a call directly."
                  : "Thank you for your message, I will get back to you shortly"}
              </span>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
