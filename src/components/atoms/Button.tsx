interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary';
}

export default function Button({ children, href, variant = 'primary' }: ButtonProps) {
  const baseClasses = "inline-block px-4 py-2 text-sm font-medium rounded-lg transition-colors";
  const variants = {
    primary: "bg-orange-500 hover:bg-orange-600 text-white"
  };

  if (href) {
    return (
      <a href={href} className={`${baseClasses} ${variants[variant]}`}>
        {children}
      </a>
    );
  }

  return (
    <button className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </button>
  );
}