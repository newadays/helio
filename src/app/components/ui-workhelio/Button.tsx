import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  type = 'button',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold transition-all rounded-md';
  
  const variantStyles = {
    primary: 'bg-[#0891b2] text-white hover:bg-[#0e7490]',
    secondary: 'bg-[#334155] text-white hover:bg-[#1e293b]',
    outline: 'border-2 border-[#0891b2] text-[#0891b2] hover:bg-[#0891b2] hover:text-white',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
  
  if (href) {
    return (
      <Link to={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }
  
  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
