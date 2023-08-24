import React from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";

const Button = () => {
  return (
    <div>
      <BookmarkIcon
        style={{
          padding: "3px",
          borderRadius: "50%",
          color: "beige",
          backgroundColor: "red",
        }}
      />
      <button className="buttons">SHOW MORE</button>
    </div>
  );
};

export default Button;
