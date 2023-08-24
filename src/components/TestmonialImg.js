import React from "react";

const TestmonialImg = ({ test }) => {
  return (
    <div className="test_img">
      <img
        src={test}
        style={{ borderRadius: "50%", padding: "2px", width: "100px" }}
      />
      <h6>Ram</h6>
      <p style={{ width: "400px", justifyContent: "space-evenly" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit fuga
        aspernatur consectetur nesciunt perspiciatis totam?
      </p>
    </div>
  );
};

export default TestmonialImg;
