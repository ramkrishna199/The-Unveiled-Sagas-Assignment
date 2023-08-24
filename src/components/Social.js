import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Social = () => {
  return (
    <div className="social">
      <InstagramIcon style={{ margin: "5px", fontSize: "14px" }} />
      <FacebookIcon style={{ margin: "5px", fontSize: "14px" }} />
      <span className="break_word" style={{ margin: "4px", fontSize: "13px" }}>
        Follow Us On
      </span>
    </div>
  );
};

export default Social;
