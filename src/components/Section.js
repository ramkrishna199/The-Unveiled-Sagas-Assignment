import React from "react";
import Image from "./Image";
import Three from "../assets/3.jpg";
import Four from "../assets/4.jpg";
import Five from "../assets/5.jpg";
import Number from "./Number";
import SectionTitle from "./SectionTitle";
import NumberTow from "./NumberTow";
import SectionTitleTow from "./SectionTitleTow";
const Section = () => {
  return (
    <section className="section">
      <div className="section_top">
        <Image url={Three} title="UNIQUETOURS" />
        <Image url={Four} title="GLOBAL PRESENCE" />
        <Image url={Five} title="25YEARS OF EXPERIENCE" />
      </div>

      {/* -----------------------Section one---------------- */}

      <div className="section_one">
        <div className="left_div">
          <Number number="01." />
          <SectionTitle title="DESTINATIONS" />
        </div>
        <div className="right_div">
          <h1>Ram</h1>
        </div>
      </div>

      {/* ---------Section two---------------- */}
      <div className="section_tow">
        <div className="left_div_tow">
          <h1>Ram</h1>
        </div>
        <div className="right_div_tow">
          <div>
            <NumberTow number="02." />
          </div>
          <div>
            <SectionTitleTow title="EXPERIENCES" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
