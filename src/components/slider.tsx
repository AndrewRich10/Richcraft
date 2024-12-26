import { Component } from "react";
import "./slider.css";

import c1 from "../assets/carousel1.png";
import c2 from "../assets/carousel2.png";
import c3 from "../assets/carousel3.png";
import c4 from "../assets/carousel4.png";
import c5 from "../assets/carousel5.png";

class Slider extends Component<{}, { currentStep: number }> {
  private autoSlideInterval: NodeJS.Timeout | null;

  constructor(props: {}) {
    super(props);

    this.state = {
      currentStep: 0,
    };

    this.autoSlideInterval = null;
  }

  componentDidMount() {
    this.startAutoSlide();
  }

  componentWillUnmount() {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide = () => {
    this.autoSlideInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentStep: (prevState.currentStep + 1) % this.photos.length, // Loop through slides
      }));
    }, 3000); // Change slide every 3 seconds
  };

  photos = [c1, c2, c3, c4, c5]; // Slider images

  render() {
    const { currentStep } = this.state;

    return (
      <div className="slider">
        <div className="slides">
          {this.photos.map((photo, idx) => {
            let positionClass = "";
            let indexOffset = Math.abs(idx - currentStep) * 20; // Dynamic offset

            if (idx === currentStep) {
              positionClass = "active"; // Center image
            } else if (idx < currentStep) {
              positionClass = "passed"; // Left (blurred)
            } else {
              positionClass = "upcoming"; // Right (blurred)
            }

            return (
              <div
                key={idx}
                className={`slide ${positionClass}`}
                style={{
                  backgroundImage: `url('${photo}')`,
                  "--index-offset": `${indexOffset}px` as React.CSSProperties["--index-offset"],
                }}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Slider;

