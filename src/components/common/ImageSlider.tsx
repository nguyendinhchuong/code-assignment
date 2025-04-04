"use client"
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface ImageSliderProps {
  images: { url: string }[];
  alt: string;
}

export const ImageSlider = ({ images, alt }: ImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative h-48 rounded-lg overflow-hidden">
      <Image
        src={images[currentIndex].url}
        alt={`${alt} - Image ${currentIndex + 1}`}
        className="w-full h-full object-cover"
        fill
      />
      
      {/* Navigation Arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 p-1 rounded-full hover:bg-black/50 transition-colors"
        onClick={prevSlide}
      >
        <ChevronLeftIcon className="w-6 h-6 text-white" />
      </button>
      
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 p-1 rounded-full hover:bg-black/50 transition-colors"
        onClick={nextSlide}
      >
        <ChevronRightIcon className="w-6 h-6 text-white" />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}; 