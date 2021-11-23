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
const BlobCursor = () => {
  const { x, y } = useMousePosition();
  return (
    <>
      {/* Anel */}
      <div style={{ left: `${x}px`, top: `${y}px` }} className="ring"></div>

      {/* Blob */}
      <div
        className="dot"
        style={{ left: `${x - 90}px`, top: `${y - 150}px` }}
      ></div>
    </>
  );
};

export default BlobCursor;
