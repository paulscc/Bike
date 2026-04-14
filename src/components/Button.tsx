import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  href?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  href,
}: ButtonProps) {
  const baseClasses = "font-headline font-bold uppercase tracking-widest transition-all duration-300 rounded-md inline-flex items-center justify-center gap-3";
  
  const variantClasses = {
    primary: "bg-secondary-container text-on-secondary hover:opacity-90 scale-95 active:scale-90",
    secondary: "bg-surface-container-highest text-on-surface hover:bg-secondary-container hover:text-white",
    tertiary: "text-secondary underline underline-offset-4 hover:underline-offset-2",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
