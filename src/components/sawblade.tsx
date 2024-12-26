import saw from "../assets/sawblade.svg";
import './sawblade.css';

const Sawblade = () => {
  return (
    <div className="sawblade-container">
      <img src={saw} alt="Sawblade" className="sawblade" />
    </div>
  );
};

export default Sawblade;
