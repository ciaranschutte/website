/**
 * Commonly used site banner that displays
 * text describing the page, and an image.
 **/

import React from "react";
import "./styles.scss";
import { H1, H4 } from "../../components";

// images
import img_our_vision from "./assets/img_our_vision.svg";
import img_services from "./assets/img_services.svg";
import img_contact from "./assets/img_contact.svg";
import img_home from "./assets/img_home.svg";

const imgs = { img_our_vision, img_services, img_contact, img_home };

const Hero = ({
  title,
  subtitle,
  children,
  fgImage,
  fgImageClass,
  bgImage,
  bgImageStyles = {},
  className
}) => {
  // Wrapper class is at least a Hero class, + possible custom className override and backgroundImage
  let wrapperClass = ` Hero ${className && className} ${bgImage && "bg-image"}`;

  // Add background image + styles if hero needs one.
  let bgImageURL = {
    backgroundImage: `url(${imgs[bgImage]})`,
    ...bgImageStyles
  };

  return (
    <div className={wrapperClass} style={bgImageURL}>
      {/* Hero Text */}
      <div className=" flex container">
        <section className="titles column is-half-desktop">
          <H1>{title}</H1>
          {subtitle && <H4 className="pt3">{subtitle}</H4>}
          {children}
        </section>


        {/* If we need a html img: Hero Image */}
        {fgImage ? (
          <section className={`image ${fgImageClass}`}>
            <img src={imgs[fgImage]} />
          </section>
        ) : (
          <div className="image" />
        )}
      </div>
    </div>
  );
};

export default Hero;
