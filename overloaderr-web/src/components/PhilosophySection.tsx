import { type FC } from 'react';
import './PhilosophySection.css';

export const PhilosophySection: FC = () => {
  return (
    <section className="philosophy-container">
      <div className="philosophy-content">
        <h2 className="philosophy-text">
          WE DON'T HOLD YOUR HAND.<br/>
          <span className="accent-text">WE LOG YOUR REPS.</span>
        </h2>
        <p className="philosophy-subtext">
          The "In-Action Action" philosophy means zero friction. 
          Get in, log the weight, and get out. Stop playing with your phone.
        </p>
      </div>
    </section>
  );
};
