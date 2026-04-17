import { type FC, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './ButtonOverload.css';

interface ButtonOverloadProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'ghost';
}

export const ButtonOverload: FC<ButtonOverloadProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`btn-overload ${variant === 'ghost' ? 'btn-ghost' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
