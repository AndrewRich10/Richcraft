import { Component } from "react";
import "./slider.css";

import c1 from "../assets/carousel1.png";
import c2 from "../assets/carousel2.png";
import c3 from "../assets/carousel3.png";
import c4 from "../assets/carousel4.png";
import c5 from "../assets/carousel5.png";

interface SliderState {
  currentStep: number;
}

class Slider extends Component<{}, SliderState> {
  private autoSlideInterval: NodeJS.Timeout | null;

  constructor(props: {}) {
    super(props);

    this.state = {
      currentStep: 0,
    };

    this.autoSlideInterval = null;
  }

  componentDidMount() {
    // Start auto-slide
    this.startAutoSlide();
  }

  componentWillUnmount() {
    // Clear auto-slide interval
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  startAutoSlide = () => {
    const photos = [c1, c2, c3, c4, c5];

    this.autoSlideInterval = setInterval(() => {
      this.setState((prevState) => ({
        currentStep: (prevState.currentStep + 1) % photos.length, // Loop around
      }));
    }, 3000); // Slide every 3 seconds
  };

  render() {
    const photos = [c1, c2, c3, c4, c5];
    const { currentStep } = this.state;

    return (
      <div className="slider">
        <div
          className="slides"
          style={{
            transform: `translateX(${currentStep * -100}%)`,
            transition: "transform 0.5s ease-out", // Smooth transition
          }}
        >
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="slide"
              style={{ backgroundImage: `url('${photo}')` }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Slider;
