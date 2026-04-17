import React from 'react';
import './Footer.css';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p>© {currentYear} THE OVERLOADERR. REJECT WEAKNESS.</p>
        </div>
        <div className="footer-right">
          <a href="/privacy.html">PRIVACY</a>
          <a href="/terms.html">TERMS</a>
          <a href="/support.html">SUPPORT</a>
        </div>
      </div>
    </footer>
  );
};
