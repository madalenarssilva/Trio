/*import Atropos from 'atropos/react';*/
import Atropos from "atropos/react/atropos-react.esm";
import "atropos/atropos.css";
import "./CardProject.css";

const Card = ({ backgroundImage, frontImage, textImage }) => {
  return (
    <Atropos
      className="my-atropos"
      shadow={false}
      highlight={false}
      rotateXMax={5}
      rotateYMax={5}
    >
      {/* Element with negative offset will move in reverse direction, making it appear behind the scene */}
      <img
        className="back"
        src={backgroundImage}
        alt="background-content"
        data-atropos-offset="-5"
      />
      {/* Element with no offset will not move */}
      <img
        className="front"
        src={frontImage}
        alt="main-content"
        data-atropos-offset="2"
      />
      {/* Element with positive offset will move in same direction, making it appear in front of the scene */}
      <span className="text-container">
        <p className="text-card" data-atropos-offset="5">
          {textImage}
        </p>
      </span>
    </Atropos>
  );
};

export default Card;
