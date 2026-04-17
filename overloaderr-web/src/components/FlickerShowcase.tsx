import { type FC, useState, useEffect } from 'react';
import './DeviceFrame.css';

const screens = [
  'iphone-screen-1.png',
  'iphone-screen-2.png',
  'iphone-screen-3.png',
  'iphone-screen-4.png',
  'iphone-screen-5.png',
  'iphone-screen-6.png',
  'iphone-screen-7.png',
  'iphone-screen-8.png',
  'iphone-screen-9.png',
  'iphone-screen-10.png',
  'iphone-screen-11.png',
  'iphone-screen-12.png',
  'iphone-screen-13.png',
  'iphone-screen-14.png',
  'iphone-screen-15.png',
  'iphone-screen-16.png',
  'iphone-screen-17.png'
];

export const FlickerShowcase: FC = () => {
  const [index, setIndex] = useState(0);
  const baseUrl = import.meta.env.BASE_URL;

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % screens.length);
    }, 1000); // 1-second pulse as requested

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flicker-monolith">
      <img 
        src={`${baseUrl}assets/${screens[index]}`} 
        alt={`Screen ${index + 1}`} 
        className="monolith-img"
        key={index} 
      />
      <div className="tactical-overlay">
        <div className="scanline"></div>
        <div className="sensor-data">
          <span className="pulse-dot"></span>
          <span className="overlay-text">ACTIVE_ENGINE_V1.0</span>
        </div>
      </div>
    </div>
  );
};
