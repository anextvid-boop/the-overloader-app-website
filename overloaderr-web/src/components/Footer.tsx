import { type FC } from 'react';
import './Footer.css';

export const Footer: FC = () => {
  const currentYear = new Date().getFullYear();
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p>© {currentYear} THE OVERLOADERR. REJECT WEAKNESS.</p>
        </div>
        <div className="footer-right">
          <a href={`${baseUrl}privacy.html`}>PRIVACY</a>
          <a href={`${baseUrl}terms.html`}>TERMS</a>
          <a href={`${baseUrl}support.html`}>SUPPORT</a>
        </div>
      </div>
    </footer>
  );
};
