import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import Swiper from "./Swiper";
import Button from "./Button";

const HeroButtom = () => {
  return (
    <div className="hero_buttom">
      <div className="buttom_left">
        <h3>
          Journeys
          <br />
          that can't
          <br />
          be beat
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, unde
          excepturi. Quaerat dolore, cum nam earum distinctio excepturi
          molestias expedita omnis vitae qui placeat eos error ullam fugiat
          necessitatibus est?
        </p>
        <Button />
      </div>
      <div className="buttom_right">{/* <Swiper /> */}</div>
    </div>
  );
};

export default HeroButtom;
