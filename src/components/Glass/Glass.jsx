import React from "react";
import { useState, useEffect } from "react";
import styles from "./Glass.module.css";

export default function Glass() {
  const [isDragging, setIsDragging] = useState(false);
  const [mousePosition, setMousePosition] = useState({
    x: window.innerWidth / 2,
    y: 280,
  });

  useEffect(() => {
    const handlePointerMove = (event) => {
      if (isDragging) {
        setMousePosition({ x: event.clientX, y: event.clientY });
      }
    };

    document.addEventListener("pointermove", handlePointerMove);

    return () => {
      document.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isDragging]);

  return (
    <>
      {/* <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="displacementFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.02"
            numOctaves="3"
            result="turbulence"
          />
          <feDisplacementMap
            in2="turbulence"
            in="SourceGraphic"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg> */}

      <div
        className={styles.glass}
        onPointerDown={() => setIsDragging(true)}
        onPointerUp={() => setIsDragging(false)}
        style={{
          left: mousePosition.x - 50 + "px",
          top: mousePosition.y - 50 + "px",
        }}
      >
        <span>Drag Me!</span>
      </div>
    </>
  );
}
