import React, { useState } from 'react';
import { Home, MapPin, Bed, Bath, Square, Search, Filter, DollarSign } from 'lucide-react';

const properties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    price: 425000,
    location: 'Downtown, New York',
    beds: 2,
    baths: 2,
    sqft: 1200,
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=400&q=80',
    type: 'Apartment',
    status: 'For Sale'
  },
  {
    id: 2,
    title: 'Luxury Beach House',
    price: 850000,
    location: 'Miami Beach, Florida',
    beds: 4,
    baths: 3,
    sqft: 2800,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=400&q=80',
    type: 'House',
    status: 'For Sale'
  },
  {
    id: 3,
    title: 'Contemporary Studio',
    price: 2500,
    location: 'Brooklyn, New York',
    beds: 1,
    baths: 1,
    sqft: 650,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=400&q=80',
    type: 'Apartment',
    status: 'For Rent'
  },
  {
    id: 4,
    title: 'Mountain View Villa',
    price: 975000,
    location: 'Boulder, Colorado',
    beds: 5,
    baths: 4,
    sqft: 3500,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=400&q=80',
    type: 'Villa',
    status: 'For Sale'
  },
  {
    id: 5,
    title: 'Urban Loft Space',
    price: 3200,
    location: 'San Francisco, CA',
    beds: 2,
    baths: 2,
    sqft: 1500,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=400&q=80',
    type: 'Loft',
    status: 'For Rent'
  },
  {
    id: 6,
    title: 'Suburban Family Home',
    price: 595000,
    location: 'Austin, Texas',
    beds: 4,
    baths: 3,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=400&q=80',
    type: 'House',
    status: 'For Sale'
  }
];

const RealEstate = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000000 });

  const types = ['All', 'House', 'Apartment', 'Villa', 'Loft'];
  const statuses = ['All', 'For Sale', 'For Rent'];

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         property.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'All' || property.type === selectedType;
    const matchesStatus = selectedStatus === 'All' || property.status === selectedStatus;
    const matchesPrice = property.price >= priceRange.min && property.price <= priceRange.max;
    return matchesSearch && matchesType && matchesStatus && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Search and Filters */}
        <div className="bg-gray-800/50 rounded-xl p-6 backdrop-blur-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search properties..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {types.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="px-4 py-2 bg-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>

            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition-colors">
              <Filter className="w-5 h-5" />
              More Filters
            </button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map(property => (
            <div key={property.id} className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur-lg group">
              <div className="relative aspect-video">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium ${
                  property.status === 'For Sale' ? 'bg-green-500' : 'bg-blue-500'
                } text-white`}>
                  {property.status}
                </span>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl font-bold text-white">
                    ${property.status === 'For Sale' 
                      ? property.price.toLocaleString()
                      : `${property.price.toLocaleString()}/mo`}
                  </span>
                  <span className="text-sm text-gray-400">{property.type}</span>
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">{property.title}</h3>
                
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                  <MapPin className="w-4 h-4" />
                  {property.location}
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Bath className="w-4 h-4" />
                    <span>{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Square className="w-4 h-4" />
                    <span>{property.sqft} sqft</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RealEstate;