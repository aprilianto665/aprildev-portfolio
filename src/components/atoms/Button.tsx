interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  disabled?: boolean;
  className?: string;
}

export default function Button({ children, href, variant = 'primary', disabled = false, className = '' }: ButtonProps) {
  const baseClasses = "inline-block px-4 py-2 text-sm font-medium rounded-lg transition-colors";
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white",
    outline: "border border-orange-500 text-orange-500 hover:bg-orange-50"
  };
  const disabledClasses = "opacity-50 cursor-not-allowed pointer-events-none";

  const classes = `${baseClasses} ${variants[variant]} ${disabled ? disabledClasses : ''} ${className}`;

  if (href && !disabled) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button disabled={disabled} className={classes}>
      {children}
    </button>
  );
}