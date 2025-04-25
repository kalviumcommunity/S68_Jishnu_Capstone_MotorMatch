
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, MapPin, Car as CarIcon, Sliders } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CarCard from '@/components/CarCard';
import { cars, brandLogos } from '@/data/cars';

export default function HomePage() {
  const [searchParams, setSearchParams] = useState({
    location: '',
    brand: '',
    model: '',
    priceRange: ''
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchParams(prev => ({ ...prev, [name]: value }));
  };

  const featuredCars = cars.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white">
        <div className="absolute inset-0 bg-black opacity-30" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
              Find Your Perfect Ride
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Buy and sell vehicles with ease. No middleman, no hassle.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link to="/browse">Browse Cars</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
                <Link to="/sell">Sell Your Car</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="bg-white shadow-md py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                name="location"
                placeholder="Location"
                className="w-full pl-10 pr-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={searchParams.location}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex-1">
              <select
                name="brand"
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={searchParams.brand}
                onChange={handleSearchChange}
              >
                <option value="">All Brands</option>
                <option value="honda">Honda</option>
                <option value="ford">Ford</option>
                <option value="toyota">Toyota</option>
                <option value="chevrolet">Chevrolet</option>
                <option value="volkswagen">Volkswagen</option>
                <option value="tesla">Tesla</option>
              </select>
            </div>
            <div className="flex-1">
              <input
                type="text"
                name="model"
                placeholder="Model"
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={searchParams.model}
                onChange={handleSearchChange}
              />
            </div>
            <div className="flex-1">
              <select
                name="priceRange"
                className="w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={searchParams.priceRange}
                onChange={handleSearchChange}
              >
                <option value="">Price Range</option>
                <option value="0-10000">Under $10,000</option>
                <option value="10000-20000">$10,000 - $20,000</option>
                <option value="20000-30000">$20,000 - $30,000</option>
                <option value="30000-50000">$30,000 - $50,000</option>
                <option value="50000+">$50,000+</option>
              </select>
            </div>
            <Button className="flex-shrink-0">
              <Search className="mr-2" size={18} />
              Search
            </Button>
          </div>
        </div>
      </div>

      {/* Brand Logo Section */}
      <div className="py-10 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Popular Brands</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {brandLogos.map((brand, index) => (
              <div key={index} className="flex justify-center">
                <img 
                  src={brand.logo} 
                  alt={brand.name} 
                  className="h-12 object-contain grayscale hover:grayscale-0 transition-all cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Listings */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Listings</h2>
            <Link 
              to="/browse" 
              className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
            >
              View All <ArrowRight className="ml-1" size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-12">Why Choose MotorMatch?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <CarIcon size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Direct from Owners</h3>
              <p className="text-gray-600">
                Connect directly with car owners without any middleman or extra fees.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sliders size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Advanced Filters</h3>
              <p className="text-gray-600">
                Find your ideal car with our comprehensive search and filtering system.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search size={28} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Verified Listings</h3>
              <p className="text-gray-600">
                All listings are verified to ensure you're getting exactly what you expect.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to find your perfect match?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied buyers and sellers on MotorMatch today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
              <Link to="/register">Get Started</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/20">
              <Link to="/learn-more">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
