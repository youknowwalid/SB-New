import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-amber-50 to-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold text-gray-900 mb-6 font-decorative">
              Shajahan's Boutique
            </h1>
            <p className="text-xl sm:text-2xl text-amber-900 mb-8 font-light tracking-wide">
              Threaded in Tradition, Stitched with Legacy
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
              Experience the artistry of hand-crafted bridal lehengas and exquisite ethnic couture,
              meticulously designed to celebrate your special moments.
            </p>
            <Link
              to="/collections"
              className="inline-flex items-center space-x-2 bg-amber-900 text-white px-8 py-4 rounded-lg hover:bg-amber-800 transition-colors duration-200 text-lg font-semibold"
            >
              <span>Explore Collections</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-amber-50 p-8 rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            Ready to Find Your Perfect Piece?
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Browse our exclusive collections or get in touch for custom designs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/collections"
              className="bg-white text-amber-900 px-8 py-3 rounded-lg hover:bg-amber-50 transition-colors font-semibold"
            >
              View Collections
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-amber-900 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    id: 1,
    icon: '✨',
    title: 'Hand-Crafted Quality',
    description: 'Each piece is meticulously hand-crafted by master artisans with years of expertise.',
  },
  {
    id: 2,
    icon: '👗',
    title: 'Custom Designs',
    description: 'Personalized designs tailored to your preferences and celebration style.',
  },
  {
    id: 3,
    icon: '🎨',
    title: 'Premium Materials',
    description: 'Only the finest fabrics and embellishments sourced from trusted suppliers worldwide.',
  },
]

export default Home