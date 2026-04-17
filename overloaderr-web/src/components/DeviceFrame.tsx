import { type FC } from 'react';
import './DeviceFrame.css';

interface DeviceFrameProps {
  src: string;
  alt: string;
  className?: string;
  delay?: string;
}

export const DeviceFrame: FC<DeviceFrameProps> = ({ 
  src, 
  alt, 
  className = '',
  delay = '0s'
}) => {
  return (
    <div className={`device-frame mockup-float ${className}`} style={{ animationDelay: delay }}>
      <img src={src} alt={alt} className="device-screen-img" />
    </div>
  );
};
