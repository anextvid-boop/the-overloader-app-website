import React, { useEffect, useRef } from 'react';
import { DeviceFrame } from './DeviceFrame';
import './FeatureDeepDive.css';

export const FeatureDeepDive: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('.feature-row') || [];
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="features-container" ref={sectionRef}>
      
      {/* Row 1: Image Left / Text Right */}
      <div className="feature-row z-pattern">
        <div className="feature-visual">
          <DeviceFrame 
            src="/assets/iphone-screen-1.png" 
            alt="Frictionless Onboarding" 
            className="feature-device"
          />
        </div>
        <div className="feature-text">
          <h3 className="feature-title">Frictionless<br/>Onboarding</h3>
          <p className="feature-description">
            No endless quizzes. No generic programs. Set your stats and instantly unlock the core engine. You are ready to log in seconds.
          </p>
        </div>
      </div>

      {/* Row 2: Text Left / Image Right */}
      <div className="feature-row reverse z-pattern">
        <div className="feature-text">
          <h3 className="feature-title">The Engineering<br/>Bay</h3>
          <p className="feature-description">
            Architect custom brutalist protocols. Drag, drop, and construct your splits with zero limitations. Total mechanical control over your progressive overload logic.
          </p>
        </div>
        <div className="feature-visual">
          <DeviceFrame 
            src="/assets/iphone-screen-2.png" 
            alt="The Engineering Bay" 
            className="feature-device"
            delay="1s"
          />
        </div>
      </div>

      {/* Row 3: Image Left / Text Right */}
      <div className="feature-row z-pattern">
        <div className="feature-visual">
          <DeviceFrame 
            src="/assets/iphone-screen-3.png" 
            alt="Mid-Sprint Tracking" 
            className="feature-device"
            delay="2s"
          />
        </div>
        <div className="feature-text">
          <h3 className="feature-title">High-Contrast<br/>Operation</h3>
          <p className="feature-description">
            Pure-black pitch voids and harsh whites. Instantly readable while shaking from a heavy set. No glare, no distractions.
          </p>
        </div>
      </div>

    </section>
  );
};
