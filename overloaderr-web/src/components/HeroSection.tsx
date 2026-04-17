import React from 'react';
import { AppStoreBadge } from './AppStoreBadge';
import { DeviceFrame } from './DeviceFrame';
import './HeroSection.css';

export const HeroSection: React.FC = () => {
  return (
    <section className="hero-container">
      <div className="hero-content">
        <div className="hero-text-area">
          <h1 className="hero-headline slam-reveal">SHATTER<br/>PLATEAUS.</h1>
          <p className="hero-subtext slam-reveal delay-1">
            Build custom workouts, track progress, and shatter plateaus. 
            The ultimate iOS workout tracker for disciplined athletes.
          </p>
          
          <div className="hero-cta-group slam-reveal delay-2">
            <AppStoreBadge url="https://apps.apple.com" />
            <div className="hero-trust-signal">
              <span className="stars">★★★★★</span>
              <span className="trust-text">Loved by hardcore lifters.</span>
            </div>
          </div>
        </div>

        <div className="hero-mockup-area slam-reveal delay-3">
          {/* We use an advertising composition image that already includes the heavy iphone wrapper */}
          <DeviceFrame 
            src="/assets/iphone-ad-1.png" 
            alt="The Overloaderr App Dashboard" 
            className="hero-main-device"
          />
        </div>
      </div>
    </section>
  );
};
