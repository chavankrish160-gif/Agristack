import { Link } from 'react-router-dom';

const navItems = [
  ['/', 'Home'],
  ['/farmer', 'Farmer'],
  ['/buyer', 'Buyer'],
  ['/delivery', 'Delivery'],
  ['/admin', 'Admin'],
  ['/disease-scanner', 'AI Scanner']
];

export default function Navbar() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <h1 className="text-xl font-bold text-mandi-dark">eMandi</h1>
        <div className="flex flex-wrap gap-3 text-sm font-medium">
          {navItems.map(([to, label]) => (
            <Link key={to} to={to} className="text-slate-700 transition hover:text-mandi-green">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
