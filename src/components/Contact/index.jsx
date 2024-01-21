import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import emailLottie from "../../assets/emailLottie.json";
import MessageSentLottie from "../../assets/MessageSentLottie.json";
import clouds from "../../assets/clouds.json";
import Lottie from "lottie-react";
import "./index.scss";

export const Contact = () => {
  const form = useRef();
  const [messageStatus, setMessageStatus] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6tj1qul",
        "template_zqz52c2",
        form.current,
        "X1KDNx9ThEYzeiqZx"
      )
      .then(
        (result) => {
          console.log(result);
          setMessageStatus(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="contact-container">
      <div className="lotties-wrapper">
        <Lottie className="cloud1" animationData={clouds} />
        <Lottie className="cloud2" animationData={clouds} />
        <Lottie className="cloud2" animationData={clouds} />
      </div>
      <div className="contact-box">
        {messageStatus ? (
          <Lottie
            animationData={MessageSentLottie}
            loop={false}
            onComplete={() => setMessageStatus(!messageStatus)}
          />
        ) : (
          <form ref={form} onSubmit={sendEmail} className="form-container">
            <div className="label-input-box">
              <label className="label-field" htmlFor="from_name">
                Name
              </label>
              <input
                required
                placeholder="Elon Musk"
                className="input-field"
                type="text"
                name="from_name"
              />
            </div>
            <div className="label-input-box">
              <label className="label-field" htmlFor="from_email">
                Email
              </label>
              <input
                className="input-field"
                type="email"
                name="from_email"
                placeholder="elonmusk@example.com"
                required
              />
            </div>
            <div className="label-input-box">
              <label className="label-field" htmlFor="message">
                Message
              </label>
              <textarea
                required
                placeholder="Hi Sameer, I'd love to talk to you about this project we're working on ..."
                className="textarea-field"
                name="message"
              />
            </div>
            <button className="send-button" type="submit">
              Send message
            </button>
          </form>
        )}
        <div className="lottie-box">
          <Lottie className="lottie" animationData={emailLottie} />
        </div>
      </div>
    </div>
  );
};
