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
      <div
        style={{ left: `${x}px`, top: `${y}px` }}
        className="ring"
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
