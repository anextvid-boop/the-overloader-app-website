import { type FC } from 'react';
import { ButtonOverload } from './ButtonOverload';
import './MailingList.css';

export const MailingList: FC = () => {
  return (
    <section className="vanguard-container">
      <div className="vanguard-content">
        <h2 className="vanguard-title">JOIN THE VANGUARD</h2>
        <p className="vanguard-description">
          Not ready to commit? Get free monthly heavy-lifting protocols and early access updates.
        </p>
        <form className="vanguard-form" action="https://formspree.io/f/your-id" method="POST">
          <input
            type="email"
            name="email"
            placeholder="YOUR@EMAIL.COM"
            required
            className="vanguard-input"
          />
          <ButtonOverload type="submit" className="vanguard-button">
            GET ACCESS
          </ButtonOverload>
        </form>
      </div>
    </section>
  );
};
