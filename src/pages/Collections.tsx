import { useState } from 'react'
import ProductCard from '../components/ProductCard'

interface Product {
  id: number
  name: string
  category: string
  price: number
  image: string
  description: string
}

function Collections() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const products: Product[] = [
    {
      id: 1,
      name: 'Royal Bridal Lehenga',
      category: 'bridal',
      price: 45000,
      image: '👰',
      description: 'Exquisite hand-embroidered bridal lehenga with intricate detailing.',
    },
    {
      id: 2,
      name: 'Festive Chaniya Choli',
      category: 'festive',
      price: 18000,
      image: '💃',
      description: 'Vibrant festive wear perfect for celebrations and events.',
    },
    {
      id: 3,
      name: 'Traditional Saree',
      category: 'saree',
      price: 12000,
      image: '🎭',
      description: 'Timeless traditional saree with classic embroidery.',
    },
    {
      id: 4,
      name: 'Designer Lehenga Set',
      category: 'bridal',
      price: 55000,
      image: '👑',
      description: 'Premium designer lehenga with matching blouse and dupatta.',
    },
    {
      id: 5,
      name: 'Party Wear Ghagra',
      category: 'festive',
      price: 22000,
      image: '✨',
      description: 'Stylish party wear ghagra choli for special occasions.',
    },
    {
      id: 6,
      name: 'Ethnic Suit',
      category: 'casual',
      price: 8000,
      image: '🧵',
      description: 'Comfortable and elegant ethnic suit for daily wear.',
    },
  ]

  const categories = [
    { id: 'all', label: 'All Collections' },
    { id: 'bridal', label: 'Bridal' },
    { id: 'festive', label: 'Festive' },
    { id: 'saree', label: 'Sarees' },
    { id: 'casual', label: 'Casual' },
  ]

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory)

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-800 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Collections</h1>
          <p className="text-lg text-amber-100">
            Discover our stunning range of hand-crafted ethnic couture
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-gray-50 py-8 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-amber-900 text-white shadow-lg'
                    : 'bg-white text-amber-900 border-2 border-amber-900 hover:bg-amber-50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-500">No products found in this category.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Collections