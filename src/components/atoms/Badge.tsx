interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function Badge({ children, variant = 'secondary', className = '' }: BadgeProps) {
  const baseClasses = "px-3.5 py-1 text-xs sm:text-sm font-extrabold transition-transform hover:-translate-y-0.5 inline-block select-none border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px]";
  const variants = {
    primary: "bg-[repeating-linear-gradient(-45deg,#fde68a,#fde68a_5px,#fef08a_5px,#fef08a_10px)] text-black outline outline-1 outline-black/35 outline-offset-[-3px]",
    secondary: "bg-[repeating-linear-gradient(45deg,#ffffff,#ffffff_5px,#f8fafc_5px,#f8fafc_10px)] text-black"
  };

  return (
    <span className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}