"use client";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "./Vector3";
import { Ray } from "./ray";
import { color } from "./utils/bg-color";
import { Point3 } from "./point3";

const RayTracingCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imageWidth, setImageWidth] = useState(400);
  const [imageHeight, setImageHeight] = useState(Math.floor(400 / (16 / 9))); // Default value

  useEffect(() => {
    const aspectRatio = 16.0 / 9.0;
    const newImageWidth = 400;
    const newImageHeight = Math.floor(newImageWidth / aspectRatio);

    setImageWidth(newImageWidth);
    setImageHeight(newImageHeight);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Camera
    const focalLength = 1.0;
    const viewportHeight = 2.0;
    const viewportWidth = viewportHeight * (imageWidth / imageHeight);
    const cameraCenter = new Point3(0, 0, 0);

    // Calculate the vectors across the horizontal and down the vertical viewport edges.
    const viewportU = new Vector3(viewportWidth, 0, 0);
    const viewportV = new Vector3(0, -viewportHeight, 0);

    // Calculate the horizontal and vertical delta vectors from pixel to pixel.
    const pixelDeltaU = viewportU.divide(imageWidth);
    const pixelDeltaV = viewportV.divide(imageHeight);

    // Calculate the location of the upper left pixel.
    const viewportUpperLeft = cameraCenter
      .subtract(new Vector3(0, 0, focalLength))
      .subtract(viewportU.divide(2))
      .subtract(viewportV.divide(2));

    const pixel00Loc = viewportUpperLeft
      .add(pixelDeltaU.multiply(0.5))
      .add(pixelDeltaV.multiply(0.5));

    const imageData = ctx.createImageData(imageWidth, imageHeight);

    for (let j = 0; j < imageHeight; j++) {
      for (let i = 0; i < imageWidth; i++) {
        const pixelCenter = pixel00Loc
          .add(pixelDeltaU.multiply(i))
          .add(pixelDeltaV.multiply(j));

        const rayDirection = pixelCenter.subtract(cameraCenter);

        const ray = new Ray(cameraCenter, rayDirection);

        const col = color(ray);

        const ir = Math.floor(255.999 * col.x);
        const ig = Math.floor(255.999 * col.y);
        const ib = Math.floor(255.999 * col.z);

        const index = (j * imageWidth + i) * 4;
        imageData.data[index] = ir; // Red
        imageData.data[index + 1] = ig; // Green
        imageData.data[index + 2] = ib; // Blue
        imageData.data[index + 3] = 255; // Alpha (fully opaque)
      }
    }

    ctx.putImageData(imageData, 0, 0);
  }, [imageWidth, imageHeight]); // Re-run when image size changes

  return <canvas ref={canvasRef} width={imageWidth} height={imageHeight} />;
};

export default RayTracingCanvas;
