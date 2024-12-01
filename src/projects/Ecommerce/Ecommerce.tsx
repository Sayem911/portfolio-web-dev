import React, { useState } from 'react';
import { ShoppingCart, Heart, Star, Search, Filter, ChevronDown } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 199.99,
    rating: 4.5,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=300&q=80',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 299.99,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80',
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Premium Backpack',
    price: 79.99,
    rating: 4.2,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=300&q=80',
    category: 'Accessories'
  },
  {
    id: 4,
    name: 'Running Shoes',
    price: 129.99,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=300&q=80',
    category: 'Sports'
  },
  {
    id: 5,
    name: 'Coffee Maker',
    price: 89.99,
    rating: 4.3,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=300&q=80',
    category: 'Home'
  },
  {
    id: 6,
    name: 'Sunglasses',
    price: 159.99,
    rating: 4.4,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=300&q=80',
    category: 'Accessories'
  },
  {
    id: 7,
    name: 'Laptop Stand',
    price: 49.99,
    rating: 4.1,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=300&q=80',
    category: 'Electronics'
  },
  {
    id: 8,
    name: 'Water Bottle',
    price: 24.99,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=300&q=80',
    category: 'Sports'
  }
];

const Ecommerce = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Electronics', 'Accessories', 'Sports', 'Home'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleCart = (productId: number) => {
    setCartItems(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const toggleWishlist = (productId: number) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative flex-1 max-w-xl">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
          </div>
          
          <div className="flex items-center gap-4">
            <div className="relative">
              <button className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white">
                <Filter className="w-5 h-5" />
                {selectedCategory}
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="absolute right-0 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl z-10">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className="w-full px-4 py-2 text-left text-white hover:bg-gray-700 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="relative p-2 text-white hover:bg-gray-800 rounded-lg">
                <Heart className="w-6 h-6" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full text-xs flex items-center justify-center">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <button className="relative p-2 text-white hover:bg-gray-800 rounded-lg">
                <ShoppingCart className="w-6 h-6" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-500 rounded-full text-xs flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-lg group">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-2 right-2 p-2 rounded-full ${
                    wishlist.includes(product.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-gray-900/50 text-white hover:bg-gray-900'
                  }`}
                >
                  <Heart className="w-5 h-5" fill={wishlist.includes(product.id) ? 'currentColor' : 'none'} />
                </button>
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      color={i < Math.floor(product.rating) ? '#FCD34D' : '#6B7280'}
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-1">{product.rating}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-1">{product.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{product.category}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-white">${product.price}</span>
                  <button
                    onClick={() => toggleCart(product.id)}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      cartItems.includes(product.id)
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-700 text-white hover:bg-blue-500'
                    }`}
                  >
                    {cartItems.includes(product.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ecommerce;