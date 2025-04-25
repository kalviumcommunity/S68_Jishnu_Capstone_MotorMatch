
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Sliders, ChevronDown, SortAsc, SortDesc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import CarCard from '@/components/CarCard';
import { Car } from '@/types';
import { cars } from '@/data/cars';

export default function CarListingsPage() {
  const [filteredCars, setFilteredCars] = useState<Car[]>(cars);
  const [filters, setFilters] = useState({
    make: [] as string[],
    minYear: 2010,
    maxYear: 2023,
    minPrice: 0,
    maxPrice: 100000,
    sortBy: 'newest',
  });
  
  const [priceRange, setPriceRange] = useState<number[]>([filters.minPrice, filters.maxPrice]);
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const makes = Array.from(new Set(cars.map(car => car.make)));

  // Apply filters and sort
  useEffect(() => {
    let results = [...cars];
    
    // Filter by make
    if (filters.make.length > 0) {
      results = results.filter(car => filters.make.includes(car.make.toLowerCase()));
    }
    
    // Filter by year
    results = results.filter(car => 
      car.year >= filters.minYear && car.year <= filters.maxYear
    );
    
    // Filter by price
    results = results.filter(car => 
      car.price >= filters.minPrice && car.price <= filters.maxPrice
    );
    
    // Sort
    if (filters.sortBy === 'newest') {
      results.sort((a, b) => b.year - a.year);
    } else if (filters.sortBy === 'oldest') {
      results.sort((a, b) => a.year - b.year);
    } else if (filters.sortBy === 'price-low-high') {
      results.sort((a, b) => a.price - b.price);
    } else if (filters.sortBy === 'price-high-low') {
      results.sort((a, b) => b.price - a.price);
    }
    
    setFilteredCars(results);
  }, [filters]);

  const handleMakeFilter = (make: string) => {
    setFilters(prev => {
      const normMake = make.toLowerCase();
      const current = [...prev.make];
      
      if (current.includes(normMake)) {
        return {
          ...prev,
          make: current.filter(m => m !== normMake)
        };
      } else {
        return {
          ...prev,
          make: [...current, normMake]
        };
      }
    });
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange(values);
    setFilters(prev => ({
      ...prev,
      minPrice: values[0],
      maxPrice: values[1]
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Find Your Perfect Ride</h1>
          <p className="text-gray-600">
            Browse through our extensive collection of vehicles
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg flex items-center">
                  <Sliders className="mr-2" size={18} />
                  Filters
                </h2>
                <button 
                  className="lg:hidden text-gray-500 hover:text-gray-700"
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                >
                  <ChevronDown size={20} />
                </button>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-medium mb-3">Make</h3>
              <div className="space-y-2">
                {makes.map((make, idx) => (
                  <div key={idx} className="flex items-center">
                    <Checkbox 
                      id={`make-${make}`}
                      checked={filters.make.includes(make.toLowerCase())}
                      onCheckedChange={() => handleMakeFilter(make)}
                    />
                    <label 
                      htmlFor={`make-${make}`}
                      className="ml-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {make}
                    </label>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-3">Price Range</h3>
                <div className="px-2">
                  <Slider 
                    defaultValue={[filters.minPrice, filters.maxPrice]} 
                    max={100000} 
                    step={1000}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                  />
                  <div className="flex justify-between mt-2 text-sm text-gray-600">
                    <span>${priceRange[0].toLocaleString()}</span>
                    <span>${priceRange[1].toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="font-medium mb-3">Year</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-sm text-gray-600">Min</label>
                    <select 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                      value={filters.minYear}
                      onChange={(e) => setFilters({...filters, minYear: parseInt(e.target.value)})}
                    >
                      {Array.from({ length: 14 }, (_, i) => 2010 + i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600">Max</label>
                    <select 
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                      value={filters.maxYear}
                      onChange={(e) => setFilters({...filters, maxYear: parseInt(e.target.value)})}
                    >
                      {Array.from({ length: 14 }, (_, i) => 2010 + i).map(year => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button className="w-full" onClick={() => setFilters({
                  make: [],
                  minYear: 2010,
                  maxYear: 2023,
                  minPrice: 0,
                  maxPrice: 100000,
                  sortBy: 'newest',
                })}>
                  Reset Filters
                </Button>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white p-4 rounded-lg shadow-sm mb-6 flex flex-col sm:flex-row justify-between items-center">
              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="mb-4 sm:mb-0 lg:hidden flex items-center text-blue-600 font-medium"
              >
                <Sliders className="mr-2" size={18} />
                {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
              </button>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-600">Sort by:</span>
                <select
                  className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm"
                  value={filters.sortBy}
                  onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                >
                  <option value="newest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
              </div>
            </div>

            {filteredCars.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h3 className="text-lg font-medium mb-2">No cars match your filters</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters to see more results.</p>
                <Button onClick={() => setFilters({
                  make: [],
                  minYear: 2010,
                  maxYear: 2023,
                  minPrice: 0,
                  maxPrice: 100000,
                  sortBy: 'newest',
                })}>
                  Reset Filters
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
