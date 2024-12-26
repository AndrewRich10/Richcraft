import React from "react";
import "./slider.css";

interface Photo {
  src: string;
}

interface SliderProps {
  photos: Photo[];
}

interface SliderState {
  currentStep: number;
  dragDistance: number;
  isDragging: boolean;
}

class Slider extends React.Component<SliderProps, SliderState> {
  private originalX: number;

  constructor(props: SliderProps) {
    super(props);

    this.state = {
      currentStep: 0,
      dragDistance: 0,
      isDragging: false,
    };

    this.originalX = 0;
  }

  componentDidMount() {
    window.addEventListener("mousedown", this.handleMouseDown as EventListener);
    window.addEventListener("mousemove", this.handleMouseMove as EventListener);
    window.addEventListener("mouseup", this.handleMouseUp as EventListener);
  }

  componentWillUnmount() {
    window.removeEventListener("mousedown", this.handleMouseDown as EventListener);
    window.removeEventListener("mousemove", this.handleMouseMove as EventListener);
    window.removeEventListener("mouseup", this.handleMouseUp as EventListener);
  }

  handleMouseDown = (event: globalThis.MouseEvent) => {
    this.originalX = event.clientX;
    this.setState({
      isDragging: true,
    });
  };

  handleMouseMove = (event: globalThis.MouseEvent) => {
    if (!this.state.isDragging) {
      return;
    }

    this.setState({
      dragDistance: event.clientX - this.originalX,
    });
  };

  handleMouseUp = () => {
    let newStep = this.state.currentStep;

    if (this.state.dragDistance > 100) {
      newStep--;
    } else if (this.state.dragDistance < -100) {
      newStep++;
    }

    this.setState({
      currentStep: newStep,
      dragDistance: 0,
      isDragging: false,
    });
  };

  render() {
    const { currentStep, dragDistance, isDragging } = this.state;
    const { photos } = this.props;

    return (
      <div className="slider">
        <div
          className="slides"
          style={{
            transform: `translateX(${currentStep * -400 + dragDistance}px)`,
            cursor: isDragging ? "grabbing" : "grab",
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
