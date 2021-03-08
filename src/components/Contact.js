import React from "react";

function Contact() {
  document.title = "Contact Me";
  console.log(window.location.pathname);
  return (
    <div className="contact">
      Connect with me on&ensp;
        <a href="https://www.linkedin.com/in/joyajeong/" target="_blank">
          LinkedIn
        </a>
      &ensp;or send me an&ensp;
      <a href="mailto:joyajeong@gmail.com">
        email
      </a> for a chat &#x1F604;.
    </div>
  );
}

export default Contact
