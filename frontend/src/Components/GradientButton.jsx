import React from 'react';

const GradientButton = ({ 
  children, 
  onClick, 
  href, 
  variant = 'primary', 
  className = '',
  type = 'button',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold text-white transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700",
    secondary: "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 border-2 border-transparent hover:border-white",
    success: "bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:from-green-600 hover:via-emerald-600 hover:to-teal-600",
    danger: "bg-gradient-to-r from-red-500 via-rose-500 to-pink-500 hover:from-red-600 hover:via-rose-600 hover:to-pink-600",
    warning: "bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 hover:from-yellow-600 hover:via-orange-600 hover:to-red-600",
  };

  const buttonClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={buttonClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default GradientButton; 