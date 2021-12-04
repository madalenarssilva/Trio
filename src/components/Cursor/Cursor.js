import { useEffect, useState } from "react";
import "./Cursor.css";

//Get Mouse Coordinates
function useMousePosition() {
  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    const mouseMoveHandler = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}

//Custom Cursor
const BlobCursor = ({color}) => {

  const {x,y} = useMousePosition();
  
  const borderStyle = '2px solid ' + color;
  
  return (
    <>
      {/* Anel */}
      <div
        className="ring"
        style={{ 
          left: `${x}px`, 
          top: `${y}px` , 
          border: borderStyle
        }}
        id="cursor-ring"
      ></div>

      {/* Blob */}
      <div
        id="cursor-blob"
        className="dot"
        style={{ left: `${x - 120}px`, top: `${y - 170}px` }}
      ></div>
    </>
  );
};

export default BlobCursor;
