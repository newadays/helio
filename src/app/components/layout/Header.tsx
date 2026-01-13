import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from 'figma:asset/6d5ad23a4da3887f72f2b0d53d0eb5970a9c05c4.png';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Divisions', href: '/divisions/government-contracting', hasDropdown: true },
  { name: 'Projects', href: '/projects' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

const divisions = [
  { name: 'Government Contracting', href: '/divisions/government-contracting' },
  { name: 'Supply Chain & Logistics', href: '/divisions/supply-chain' },
  { name: 'Technology Solutions', href: '/divisions/technology' },
  { name: 'Infrastructure Services', href: '/divisions/infrastructure' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [divisionsOpen, setDivisionsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="bg-[#1a1f2e] text-white sticky top-0 z-50 border-b border-gray-800">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Workhelio</span>
              <img className="h-10 w-auto" src={logo} alt="Workhelio" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              item.hasDropdown ? (
                <div key={item.name} className="relative">
                  <button
                    onMouseEnter={() => setDivisionsOpen(true)}
                    onMouseLeave={() => setDivisionsOpen(false)}
                    className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </button>
                  {divisionsOpen && (
                    <div
                      onMouseEnter={() => setDivisionsOpen(true)}
                      onMouseLeave={() => setDivisionsOpen(false)}
                      className="absolute left-0 top-full mt-2 w-64 bg-[#252b3d] border border-gray-700 rounded-lg shadow-xl"
                    >
                      {divisions.map((division) => (
                        <Link
                          key={division.href}
                          to={division.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:bg-[#2d3548] hover:text-white transition-colors"
                        >
                          {division.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-white'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              to="/contact"
              className="bg-[#0891b2] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0e7490] transition-colors rounded-md"
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#252b3d] border-t border-gray-800">
          <div className="space-y-1 px-6 pb-6 pt-6">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-[#2d3548] hover:text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.hasDropdown && (
                  <div className="ml-4 mt-2 space-y-1">
                    {divisions.map((division) => (
                      <Link
                        key={division.href}
                        to={division.href}
                        className="block rounded-md px-3 py-2 text-sm text-gray-400 hover:bg-[#2d3548] hover:text-white"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {division.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="block mt-4 bg-[#0891b2] px-3 py-2 text-center rounded-md text-base font-semibold text-white hover:bg-[#0e7490]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partner With Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
