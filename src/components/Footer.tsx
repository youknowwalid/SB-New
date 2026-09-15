import { Mail, Phone, MapPin } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">
              About Us
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Shajahan's Boutique specializes in hand-crafted bridal lehengas
              and ethnic couture. Threaded in tradition, stitched with legacy.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="text-gray-400 hover:text-amber-300 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/collections" className="text-gray-400 hover:text-amber-300 transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-amber-300 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-amber-300">
              Contact
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-amber-300 flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-400 hover:text-amber-300 transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-amber-300 flex-shrink-0" />
                <a href="mailto:info@shajahansboutique.com" className="text-gray-400 hover:text-amber-300 transition-colors">
                  info@shajahansboutique.com
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={16} className="text-amber-300 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  123 Fashion Street, Design District
                </span>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-gray-800 mb-6" />

        {/* Copyright */}
        <div className="text-center text-sm text-gray-500">
          <p>
            &copy; {currentYear} Shajahan's Boutique. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer