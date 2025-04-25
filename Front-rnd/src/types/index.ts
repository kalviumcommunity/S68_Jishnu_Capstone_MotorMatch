
export interface Car {
  id: string;
  make: string;
  model: string;
  year: number;
  price: number;
  location: string;
  mileage: number;
  image: string;
  description?: string;
  fuelType?: string;
  transmission?: string;
  owner?: {
    name: string;
    phone: string;
  };
  tags?: string[];
  hotPick?: boolean;
  priceDropped?: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'buyer' | 'seller' | 'admin';
  avatar?: string;
  wishlist?: string[];
}
