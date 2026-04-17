import { type FC } from 'react';
import { ButtonOverload } from './ButtonOverload';
import './MailingList.css';

export const MailingList: FC = () => {
  return (
    <section className="vanguard-container">
      <div className="vanguard-content">
        <h2 className="vanguard-title">JOIN THE OVERLOADERR APP COMMUNITY</h2>
        <p className="vanguard-description">
          Be the first to know when we ship new protocols. No spam. Just high-precision updates.
        </p>
        <form className="vanguard-form" action="https://formspree.io/f/your-id" method="POST">
          <input
            type="email"
            name="email"
            placeholder="YOUR@EMAIL.COM"
            required
            className="vanguard-input"
          />
          <ButtonOverload type="submit" className="vanguard-button" style={{ background: 'var(--bg-pitch)', color: '#fff', boxShadow: 'none' }}>
            GET ACCESS
          </ButtonOverload>
        </form>
      </div>
    </section>
  );
};
