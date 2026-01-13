import { Link } from 'react-router-dom';
import { Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../../../assets/logo.png';

const divisions = [
  { name: 'Government Contracting', href: '/divisions/government-contracting' },
  { name: 'Supply Chain & Logistics', href: '/divisions/supply-chain' },
  { name: 'Technology Solutions', href: '/divisions/technology' },
  { name: 'Infrastructure Services', href: '/divisions/infrastructure' },
];

const company = [
  { name: 'About Us', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Compliance', href: '/compliance' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-[#1a1f2e] text-gray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img className="h-10" src={logo} alt="Workhelio" />
            <p className="text-sm leading-6">
              Delivering reliable solutions across government contracting, supply chain, technology, and infrastructure.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gray-300">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Divisions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {divisions.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {company.map((item) => (
                    <li key={item.name}>
                      <Link to={item.href} className="text-sm leading-6 text-gray-400 hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Contact</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-6 text-gray-400">
                      123 Enterprise Blvd, Suite 500<br />
                      Washington, DC 20001
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <span className="text-sm leading-6 text-gray-400">
                      (202) 555-0100
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    <span className="text-sm leading-6 text-gray-400">
                      info@workhelio.com
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Workhelio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
