"use client";

import Image from 'next/image';
import { FC } from 'react';

interface ModalProps {
  isOpen: boolean;
  currentIndex: number;
  galleryItems: { src: string; alt: string }[];
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Modal: FC<ModalProps> = ({ isOpen, currentIndex, galleryItems, onClose, onPrev, onNext }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative max-w-screen-lg mx-auto">
        <button
          className="absolute top-4 right-4 text-white text-2xl font-bold p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition"
          onClick={onClose}
        >
          &times;
        </button>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition"
          onClick={onPrev}
        >
          &#10094;
        </button>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl p-2 bg-gray-800 rounded-full hover:bg-gray-600 transition"
          onClick={onNext}
        >
          &#10095;
        </button>
        <Image
          src={galleryItems[currentIndex].src}
          alt={galleryItems[currentIndex].alt}
          className="w-full h-auto"
          layout="responsive"
          width={1200}
          height={800}
        />
      </div>
    </div>
  );
};

export default Modal;
