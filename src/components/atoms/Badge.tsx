interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Badge({ children, variant = 'secondary' }: BadgeProps) {
  const baseClasses = "px-2 sm:px-3 py-1 text-xs sm:text-sm font-medium rounded-lg border";
  const variants = {
    primary: "bg-gradient-to-r from-orange-400 to-orange-500 text-white rounded-full",
    secondary: "bg-orange-50 text-orange-700 border-orange-200"
  };

  return (
    <span className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </span>
  );
}