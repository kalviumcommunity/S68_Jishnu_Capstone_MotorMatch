
import { Link } from "react-router-dom";
import { Car } from "../types";
import { Heart } from "lucide-react";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface CarCardProps {
  car: Car;
  showLocation?: boolean;
  wishlistActions?: boolean;
  onWishlistToggle?: (id: string) => void;
  isInWishlist?: boolean;
}

export default function CarCard({
  car,
  showLocation = true,
  wishlistActions = true,
  onWishlistToggle,
  isInWishlist = false,
}: CarCardProps) {
  const [isWishlisted, setIsWishlisted] = useState(isInWishlist);

  const handleWishlistToggle = () => {
    if (onWishlistToggle) {
      onWishlistToggle(car.id);
    }
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="car-card group relative">
      {car.hotPick && (
        <Badge variant="hotPick" className="absolute top-3 right-3 z-10">
          Hot Pick
        </Badge>
      )}
      {car.priceDropped && (
        <Badge variant="priceDropped" className="absolute top-3 right-3 z-10">
          Price Dropped
        </Badge>
      )}
      
      <Link to={`/car/${car.id}`} className="block">
        <div className="overflow-hidden h-48 relative">
          <img 
            src={car.image} 
            alt={`${car.make} ${car.model}`} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {wishlistActions && (
            <button 
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleWishlistToggle();
              }}
              className="absolute top-3 left-3 bg-white/80 rounded-full p-1.5 shadow-md hover:bg-white transition-all"
            >
              <Heart 
                size={20} 
                className={cn(
                  "transition-colors", 
                  isWishlisted ? "fill-red-500 text-red-500" : "text-gray-600"
                )} 
              />
            </button>
          )}
        </div>

        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold text-lg">
              {car.make} {car.model} <span className="text-gray-500">{car.year}</span>
            </h3>
          </div>
          
          <div className="text-xl font-bold text-blue-600 mb-2">
            ${car.price.toLocaleString()}
          </div>
          
          {showLocation && (
            <div className="text-gray-500 text-sm">
              {car.location}
            </div>
          )}
          
          <div className="flex mt-2 text-sm text-gray-600">
            <div className="mr-4">{car.mileage.toLocaleString()} miles</div>
            {car.transmission && <div>{car.transmission}</div>}
          </div>
        </div>
      </Link>
    </div>
  );
}
