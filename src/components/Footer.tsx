import { Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tight text-white mb-4 block">
              Ale-Xis <span className="text-blue-500">Painting</span>
            </a>
            <p className="text-sm text-slate-400 max-w-xs">
              Professional painting and remediation services dedicated to transforming and protecting your property.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#why-us" className="hover:text-blue-400 transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Get an Estimate</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Interior Painting</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Exterior Painting</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Remediation Services</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Commercial Painting</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Stucco Repair</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Drywall Repair</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} Ale-Xis Painting LLC. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-slate-500">
            <a href="https://ig.me/m/alexis_painting" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
