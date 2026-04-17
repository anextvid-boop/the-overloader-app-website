import { type FC } from 'react';
import './Header.css';

export const Header: FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className="header-container">
      <div className="header-content centered-stack">
        <a href={baseUrl} className="branding-group">
          <img src={`${baseUrl}assets/theoverloaderr_logo_1.png`} alt="Logo" className="header-logo" />
          <div className="title-stack">
            <h1 className="header-title">THE OVERLOADERR APP</h1>
            <span className="header-subtitle">SHATTER PLATEAUS</span>
          </div>
        </a>
      </div>
    </header>
  );
};
