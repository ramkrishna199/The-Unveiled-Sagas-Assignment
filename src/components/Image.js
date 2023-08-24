import React from "react";

const Image = ({ url, title }) => {
  return (
    <div>
      <div className="image_">
        <img className="image" src={url} alt="#" />
      </div>
      <div className="img_qto">
        <h5>{title}</h5>
        <p className="history">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          accusamus.
        </p>
      </div>
    </div>
  );
};

export default Image;
