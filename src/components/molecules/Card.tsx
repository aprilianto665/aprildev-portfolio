interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div className={`bg-[repeating-linear-gradient(45deg,#ffffff,#ffffff_6px,#fcfbf9_6px,#fcfbf9_12px)] border-2 border-black rounded-[255px_15px_225px_15px/15px_225px_15px_255px] outline outline-1 outline-black/30 outline-offset-[-4px] p-6 sm:p-8 transition-transform hover:-translate-y-1 ${className}`}>
      {children}
    </div>
  );
}