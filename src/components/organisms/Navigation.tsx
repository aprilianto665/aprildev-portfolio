import Link from 'next/link';

export default function Navigation() {
  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-900">
            April <span className="text-orange-500">Dev</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-gray-700 hover:text-orange-500 transition-colors">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}