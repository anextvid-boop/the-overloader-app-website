import { type FC } from 'react';
import './Header.css';

export const Header: FC = () => {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <header className="header-container">
      <div className="header-content">
        <a href={baseUrl} className="logo-link">
          <img src={`${baseUrl}assets/theoverloaderr_logo_1.png`} alt="The Overloaderr Logo" className="header-logo" />
        </a>
        <nav className="header-nav">
          <a href="#features" className="nav-item">FEATURES</a>
          <a href="#vanguard" className="nav-item">VANGUARD</a>
        </nav>
      </div>
    </header>
  );
};
