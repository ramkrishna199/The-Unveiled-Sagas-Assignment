import React from "react";
import CallIcon from "@mui/icons-material/Call";

const Contact = () => {
  return (
    <div className="contact_style">
      <CallIcon
        style={{
          position: "absolute",
          right: 0,
          backgroundColor: "red",
          borderRadius: "50px",
          color: "beige",
          padding: "4px",
          marginRight: "2px",
        }}
      />
      <br />
      <button>
        <a href="#" className="contact">
          Contact Us
        </a>
      </button>
    </div>
  );
};

export default Contact;
