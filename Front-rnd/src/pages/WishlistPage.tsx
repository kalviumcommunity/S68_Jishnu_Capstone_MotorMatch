
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, X, ArrowRight, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cars } from '@/data/cars';

export default function WishlistPage() {
  // For demo purposes, start with a few cars in the wishlist
  const [wishlistCars, setWishlistCars] = useState(cars.slice(0, 4));

  const removeFromWishlist = (id: string) => {
    setWishlistCars(wishlistCars.filter(car => car.id !== id));
  };

  const clearWishlist = () => {
    setWishlistCars([]);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Your Dream Garage</h1>
          <p className="text-gray-600 mt-2">
            Cars you've got your eye on — one step closer to the perfect match.
          </p>
        </div>

        {wishlistCars.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="text-gray-400" size={28} /> 
            </div>
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-gray-600 mb-6">
              Start adding cars to your wishlist by clicking the heart icon on any listing.
            </p>
            <Button asChild>
              <Link to="/browse">Browse Cars</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center mb-4">
              <div className="text-sm text-gray-500">{wishlistCars.length} vehicles</div>
              <Button variant="outline" size="sm" className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600" onClick={clearWishlist}>
                <Trash2 className="mr-1" size={16} />
                Clear Wishlist
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {wishlistCars.map((car) => (
                <div key={car.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                  <div className="flex flex-col sm:flex-row">
                    <div className="w-full sm:w-48 h-48 relative">
                      <img 
                        src={car.image} 
                        alt={`${car.make} ${car.model}`} 
                        className="w-full h-full object-cover"
                      />
                      {car.hotPick && (
                        <Badge variant="hotPick" className="absolute top-2 left-2">
                          Hot Pick
                        </Badge>
                      )}
                      {car.priceDropped && (
                        <Badge variant="priceDropped" className="absolute top-2 left-2">
                          Price Dropped
                        </Badge>
                      )}
                    </div>
                    <div className="flex-1 p-4">
                      <div className="flex justify-between">
                        <h3 className="font-bold text-lg mb-1">
                          {car.make} {car.model} {car.year}
                        </h3>
                        <button 
                          onClick={() => removeFromWishlist(car.id)}
                          className="text-gray-400 hover:text-gray-600"
                        >
                          <X size={18} />
                        </button>
                      </div>
                      <div className="text-xl text-blue-600 font-bold mb-2">
                        ${car.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-gray-500 mb-3">
                        {car.location}
                      </div>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-600 mb-4">
                        <div>{car.mileage.toLocaleString()} miles</div>
                        {car.transmission && <div>• {car.transmission}</div>}
                        {car.fuelType && <div>• {car.fuelType}</div>}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Button asChild size="sm">
                          <Link to={`/car/${car.id}`}>
                            View Details
                            <ArrowRight className="ml-1" size={16} />
                          </Link>
                        </Button>
                        <Button variant="outline" size="sm">
                          Contact Seller
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
