"use client";
import { useEffect, useRef } from "react";
import { Vector3 } from "./Vector3";

const RayTracingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageWidth = 256;
    const imageHeight = 256;

    const imageData = ctx.createImageData(imageWidth, imageHeight);

    for (let j = 0; j < imageHeight; j++) {
      for (let i = 0; i < imageWidth; i++) {
        const r = i / (imageWidth - 1);
        const g = j / (imageHeight - 1);
        const b = 0.0;

        const color = new Vector3(r,g,b);

        const ir = Math.floor(255.999 * color.x);
        const ig = Math.floor(255.999 * color.y);
        const ib = Math.floor(255.999 * color.z);

        const index = (j * imageWidth + i) * 4;
        imageData.data[index] = ir; // Red
        imageData.data[index + 1] = ig; // Green
        imageData.data[index + 2] = ib; // Blue
        imageData.data[index + 3] = 255; // Alpha (fully opaque)
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, []);

  return <canvas ref={canvasRef} width={256} height={256} />;
};

export default RayTracingCanvas;
