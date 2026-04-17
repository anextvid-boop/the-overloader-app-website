import React from 'react';
import './ButtonOverload.css';

interface ButtonOverloadProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
}

export const ButtonOverload: React.FC<ButtonOverloadProps> = ({ 
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
