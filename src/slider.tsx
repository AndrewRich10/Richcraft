import { Component } from "react";
import "./slider.css";

interface Photo {
  src: string;
}

interface SliderProps {
  photos: Photo[];
}

interface SliderState {
  currentStep: number;
}

class Slider extends Component<SliderProps, SliderState> {
  private autoSlideInterval: NodeJS.Timeout | null;

  constructor(props: SliderProps) {
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
    this.autoSlideInterval = setInterval(() => {
      const { photos } = this.props;
      this.setState((prevState) => ({
        currentStep: (prevState.currentStep + 1) % photos.length, // Loop around
      }));
    }, 3000); // Slide every 3 seconds
  };

  render() {
    const { currentStep } = this.state;
    const { photos } = this.props;

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
              style={{ backgroundImage: `url('${photo.src}')` }}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Slider;
