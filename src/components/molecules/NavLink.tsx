interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-orange-500 transition-colors"
    >
      {children}
    </a>
  );
}