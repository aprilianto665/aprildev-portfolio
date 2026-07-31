interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'outline';
  disabled?: boolean;
  className?: string;
}

export default function Button({ children, href, variant = 'primary', disabled = false, className = '' }: ButtonProps) {
  const baseClasses = "inline-block px-4 py-2 text-sm font-extrabold border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] outline outline-1 outline-black/35 outline-offset-[-3px] select-none transition-transform hover:-translate-y-0.5";
  const variants = {
    primary: "bg-[repeating-linear-gradient(-45deg,#f97316,#f97316_5px,#fb923c_5px,#fb923c_10px)] text-white",
    outline: "bg-[repeating-linear-gradient(45deg,#fed7aa,#fed7aa_5px,#ffedd5_5px,#ffedd5_10px)] text-black"
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