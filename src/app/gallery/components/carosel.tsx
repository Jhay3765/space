"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { GetData } from "./getData";

export function App() {
  const [spaceData, setSpaceData] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetData();
      setSpaceData(data);
    };

    fetchData();
  }, []);

  const images = spaceData.map((data: any) => data.url);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setImageLoaded(false);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setImageLoaded(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  if (images.length === 0) {
    return (
      <div className="flex justify-center items-center font-bold py-20">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-20 items-center">
      <button className="text-white" onClick={goToPreviousImage}>
        Previous
      </button>
      <div className="w-[600px] h-[600px] relative">
        {imageLoaded ? null : (
          <div className="loader flex justify-center items-center h-full ">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        )}
        <div
          className={`image-container ${
            imageLoaded ? "image-loaded" : "image-loading"
          }`}
        >
          <Image
            className="image-transition"
            src={images[currentImageIndex]}
            alt="carousel"
            layout="fill"
            objectFit="cover"
            onLoad={handleImageLoad}
            quality={100}
          />
        </div>
      </div>
      <button onClick={goToNextImage}>Next</button>
    </div>
  );
}
