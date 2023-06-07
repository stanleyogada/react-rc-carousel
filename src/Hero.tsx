import { CSSProperties } from "react";

import { Slider } from "./components/Slider";

const Hero = () => {
  const heroStyle: CSSProperties = {
    height: "600px",
    position: "relative",
  };
  const imageContainerStyle: CSSProperties = {
    position: "absolute",
    width: "100%",
    height: "100%",
  };
  const imageStyle: CSSProperties = {
    objectFit: "cover",
    objectPosition: "center",
    width: "100%",
    height: "100%",
  };
  const contentStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
    color: "white",
    flexDirection: "column",
    backgroundColor: "#0000003d",
    padding: "10px",
  };

  const buttonStyle = {
    padding: "10px",
  };

  return (
    <Slider
      changeSlideAnimation={{
        isSlide: true,
      }}
      // isShowButtons={{
      //   position: "bottom-left",
      //   isRounded: false,
      //   spaced: false,
      // }}
    >
      <div style={heroStyle}>
        <div style={imageContainerStyle}>
          <img
            style={imageStyle}
            src="https://images.pexels.com/photos/14894652/pexels-photo-14894652.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          />
        </div>

        <div style={contentStyle}>
          <p>Hello some dummy text...</p>
          <button style={buttonStyle}>Click me here</button>
        </div>
      </div>

      <div style={heroStyle}>
        <div style={imageContainerStyle}>
          <img
            style={imageStyle}
            src="https://images.pexels.com/photos/17043996/pexels-photo-17043996/free-photo-of-portrait-of-a-man-in-dark-room.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          />
        </div>

        <div style={contentStyle}>
          <p>Welcome to our website...</p>
          <button style={buttonStyle}>Sign Up</button>
        </div>
      </div>

      <div style={heroStyle}>
        <div style={imageContainerStyle}>
          <img
            style={imageStyle}
            src="https://images.pexels.com/photos/17094724/pexels-photo-17094724.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
          />
        </div>

        <div style={contentStyle}>
          <p>Explore the possibilities</p>
          <button style={buttonStyle}>Start browsing</button>
        </div>
      </div>
    </Slider>
  );
};

export default Hero;
