import { type FC, useState } from 'react';
import { ButtonOverload } from './ButtonOverload';
import './PaywallSection.css';

export const PaywallSection: FC = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="paywall-container">
      <div className="paywall-header border-b">
        <h2 className="paywall-title">UPGRADE YOUR PROTOCOL</h2>
        <div className="billing-toggle-container">
          <span className={`toggle-label ${!isYearly ? 'active' : ''}`}>Monthly</span>
          <div
            className={`toggle-track ${isYearly ? 'toggled' : ''}`}
            onClick={() => setIsYearly(!isYearly)}
          >
            <div className="toggle-knob"></div>
          </div>
          <span className={`toggle-label ${isYearly ? 'active' : ''}`}>Yearly <span className="save-badge">SAVE 30%</span></span>
        </div>
      </div>

      <div className="paywall-grid">
        {/* Basic Tier */}
        <div className="paywall-card basic-card">
          <h3 className="tier-name">THE TRACKER</h3>
          <div className="tier-price">
            <span className="price-value">$0.00</span>
            <span className="price-period">/ FREE FOREVER</span>
          </div>
          <p className="tier-desc">Get the core engine running. Frictionless mechanics without the bloat.</p>
          <ul className="tier-features">
            <li>Standard Workout Logging</li>
            <li>Basic Progress History</li>
            <li>Local Database Access</li>
          </ul>
          <ButtonOverload variant="ghost" className="mt-auto">DOWNLOAD FREE</ButtonOverload>
        </div>

        {/* Pro Tier */}
        <div className="paywall-card pro-card">
          <div className="pro-badge">MOST BUILT-OUT</div>
          <h3 className="tier-name">OVERLOADERR PRO</h3>
          <div className="tier-price">
            <span className="price-value">{isYearly ? '$49.99' : '$5.99'}</span>
            <span className="price-period">{isYearly ? '/ YEAR' : '/ MONTH'}</span>
          </div>
          <p className="tier-desc">Unlock the absolute limits of the iOS engine. Advanced metrics and endless control.</p>
          <ul className="tier-features">
            <li>Advanced Lift Analytics</li>
            <li>Custom Protocol Builders</li>
            <li>Unlimited Workout Templates</li>
            <li>Locked Data Ecosystem</li>
          </ul>
          <ButtonOverload className="mt-auto">UNLOCK PRO NOW</ButtonOverload>
        </div>
      </div>
    </section>
  );
};
