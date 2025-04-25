
import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Share2, Phone, MapPin, Calendar, Fuel, Info, Activity, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cars } from '@/data/cars';
import { cn } from '@/lib/utils';

export default function CarDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  // Find the car by ID
  const car = cars.find(car => car.id === id);
  
  // Handle case where car is not found
  if (!car) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Car Not Found</h1>
        <p className="text-gray-600 mb-6">The car you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/browse" className="flex items-center">
            <ArrowLeft className="mr-2" size={18} />
            Back to Listings
          </Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link to="/browse" className="text-blue-600 hover:text-blue-800 flex items-center font-medium">
            <ArrowLeft size={18} className="mr-1" />
            Back to Listings
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Car Images */}
          <div className="relative h-72 md:h-[450px] bg-gray-100">
            <img 
              src={car.image} 
              alt={`${car.make} ${car.model}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 flex space-x-2">
              <button 
                className="p-2 bg-white/90 hover:bg-white rounded-full shadow-md"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart 
                  size={20} 
                  className={cn(
                    "transition-colors", 
                    isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
                  )} 
                />
              </button>
              <button className="p-2 bg-white/90 hover:bg-white rounded-full shadow-md">
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          <div className="p-6">
            {/* Car Title and Price */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <h1 className="text-3xl font-bold">{car.make} {car.model}</h1>
                  {car.hotPick && (
                    <Badge variant="hotPick">Hot Pick</Badge>
                  )}
                  {car.priceDropped && (
                    <Badge variant="priceDropped">Price Dropped</Badge>
                  )}
                </div>
                <div className="text-gray-500">{car.year} • {car.mileage.toLocaleString()} miles</div>
              </div>
              <div className="mt-4 md:mt-0">
                <div className="text-3xl font-bold text-blue-600">${car.price.toLocaleString()}</div>
              </div>
            </div>

            {/* Car Info and Details */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold mb-4">Vehicle Details</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 rounded-md">
                    <div className="text-gray-500 text-sm mb-1">Year</div>
                    <div className="flex items-center">
                      <Calendar className="mr-2 text-blue-600" size={18} />
                      <div className="font-medium">{car.year}</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <div className="text-gray-500 text-sm mb-1">Mileage</div>
                    <div className="flex items-center">
                      <Activity className="mr-2 text-blue-600" size={18} />
                      <div className="font-medium">{car.mileage.toLocaleString()} miles</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <div className="text-gray-500 text-sm mb-1">Fuel Type</div>
                    <div className="flex items-center">
                      <Fuel className="mr-2 text-blue-600" size={18} />
                      <div className="font-medium">{car.fuelType || 'Gasoline'}</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <div className="text-gray-500 text-sm mb-1">Transmission</div>
                    <div className="flex items-center">
                      <Info className="mr-2 text-blue-600" size={18} />
                      <div className="font-medium">{car.transmission}</div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-md">
                    <div className="text-gray-500 text-sm mb-1">Location</div>
                    <div className="flex items-center">
                      <MapPin className="mr-2 text-blue-600" size={18} />
                      <div className="font-medium">{car.location}</div>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Description</h2>
                  <p className="text-gray-700">{car.description}</p>
                </div>
                
                <div>
                  <h2 className="text-xl font-bold mb-4">Features</h2>
                  <ul className="grid grid-cols-2 gap-2">
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Backup Camera
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Bluetooth
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Power Windows
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Keyless Entry
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Cruise Control
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      USB Port
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      Air Conditioning
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      ABS Brakes
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-gray-50 p-6 rounded-lg sticky top-4">
                  <h3 className="font-bold mb-4">Contact Seller</h3>
                  <div className="mb-6">
                    <div className="font-medium">{car.owner?.name}</div>
                    <div className="text-gray-500">{car.location}</div>
                  </div>
                  <Button className="w-full mb-3 flex items-center justify-center">
                    <Phone className="mr-2" size={18} />
                    {car.owner?.phone}
                  </Button>
                  <Button variant="outline" className="w-full">
                    Message Seller
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
