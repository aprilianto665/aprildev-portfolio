interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}

export default function Badge({ children, variant = 'secondary' }: BadgeProps) {
  const baseClasses = "px-3 py-1 text-xs sm:text-sm font-bold border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-0.5 inline-block";
  const variants = {
    primary: "bg-amber-300 text-black",
    secondary: "bg-white text-black"
  };

  return (
    <span className={`${baseClasses} ${variants[variant]}`}>
      {children}
    </span>
  );
}