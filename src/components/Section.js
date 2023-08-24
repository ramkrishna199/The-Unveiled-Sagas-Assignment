import React from "react";
import Image from "./Image";
import Three from "../assets/3.jpg";
import Four from "../assets/4.jpg";
import Five from "../assets/5.jpg";
import Number from "./Number";
import SectionTitle from "./SectionTitle";
import NumberTow from "./NumberTow";
import SectionTitleTow from "./SectionTitleTow";
import SwiperReact from "./Swiper";
import video from "../assets/transport_-_23232 (720p).mp4";
import HeroButtom from "./HeroButtom";
import Test from "../assets/pexels-andrea-piacquadio-733872.jpg";
import Six from "../assets/Screenshot 2023-08-24 151817.png";
import TestmonialImg from "./TestmonialImg";
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
          <SwiperReact />
        </div>
      </div>

      {/* ---------Section two---------------- */}
      <div className="section_tow">
        <div className="left_div_tow">
          {/* <h1>Ram</h1> */}

          <div className="row">
            <div className="column">
              <img src={Three} />
              <img src={Four} />
            </div>
            <div className="column">
              <img src={Five} />
              <img src={Three} />
            </div>
            <div className="column">
              <img src={Four} />
              <img src={Five} />
            </div>
            <div className="column">
              <img src={Three} />
              <img src={Four} />
            </div>
          </div>
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

      {/* ----------section 3---------------- */}
      <div className="section_one">
        <div className="left_div">
          <Number number="03." />
          <SectionTitle title="TRAVEL STYLES" />
        </div>
        <div className="right_div">
          {/* <SwiperReact /> */}
          <div className="row">
            <div className="column">
              <img src={Three} />
              <img src={Four} />
            </div>
            <div className="column">
              <img src={Five} />
              <img src={Three} />
            </div>
            <div className="column">
              <img src={Four} />
              <img src={Five} />
            </div>
            <div className="column">
              <img src={Three} />
              <img src={Four} />
            </div>
          </div>
        </div>
      </div>

      {/* ----------------SECTION 4-------------- */}
      <div className="section_four">
        <div className="left_div_four">
          <div className="trapezoid">
            <div className="number_four">
              <Number number="04." />
              <p className="section_title title_color">
                Journeys
                <br />
                that
                <br />
                can't be
                <br />
                <span style={{ color: "black" }}>beat</span>
              </p>
              {/* <SectionTitle title="Journeys that Can't be beat" /> */}
            </div>
          </div>
        </div>
        <div className="right_div_four">
          <div className="parallelogram">
            <video
              src={video}
              autoPlay
              loop
              controls
              style={{ width: "400px" }}
            />
          </div>
        </div>
      </div>

      {/* --------------------------testimonial------------------- */}

      <div className="testymonial">
        <div className="left">
          <h1>Testimonials</h1>
          <p className="test_lor">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
            necessitatibus aliquam ab id repellat sint!
          </p>
        </div>
        <div className="right">
          <TestmonialImg test={Test} />
          <TestmonialImg test={Test} />
          <TestmonialImg test={Test} />
          <TestmonialImg test={Test} />
        </div>
      </div>
    </section>
  );
};

export default Section;
