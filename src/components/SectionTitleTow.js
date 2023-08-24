import React from "react";
import Button from "./Button";

const SectionTitleTow = ({ title }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="section_title_tow">{title}</div>
      <div>
        <div className="section_sub_title_tow">
          {/* <p> */}
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda
          voluptate pariatur laudantium doloremque. Cupiditate, commodi
          consequatur in mollitia numquam eum harum dolor totam temporibus
          reiciendis?
          {/* </p> */}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default SectionTitleTow;
