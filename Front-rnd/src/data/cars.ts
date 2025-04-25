
import { Car } from '../types';

export const cars: Car[] = [
  {
    id: '1',
    make: 'Honda',
    model: 'Civic',
    year: 2019,
    price: 22500,
    location: 'Los Angeles, CA',
    mileage: 30000,
    image: '/lovable-uploads/c76d6887-dce8-4624-bd9f-0b49832b6dec.png',
    description: 'Excellent condition. Reliable v4, fuel efficient. Include backup camera, Bluetooth.',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    owner: {
      name: 'Jacob Martin',
      phone: '(123) 456-7890'
    }
  },
  {
    id: '2',
    make: 'Ford',
    model: 'Mustang',
    year: 2022,
    price: 30000,
    location: 'New York, NY',
    mileage: 15000,
    image: '/lovable-uploads/34ac0155-6eb1-426c-bc10-08e3f9d9cfae.png',
    description: 'Powerful V8 engine, leather interior, excellent condition.',
    fuelType: 'Gasoline',
    transmission: 'Manual',
    owner: {
      name: 'Emma Johnson',
      phone: '(234) 567-8901'
    },
    hotPick: true
  },
  {
    id: '3',
    make: 'Volkswagen',
    model: 'Golf',
    year: 2021,
    price: 28500,
    location: 'Los Angeles, CA',
    mileage: 22000,
    image: '/lovable-uploads/63a0c4a1-50c2-4305-9971-3292fa21a081.png',
    description: 'Well maintained, fuel efficient, includes premium sound system.',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    owner: {
      name: 'Daniel Smith',
      phone: '(345) 678-9012'
    },
    hotPick: true
  },
  {
    id: '4',
    make: 'Chevrolet',
    model: 'Camaro',
    year: 2020,
    price: 38000,
    location: 'Dallas, TX',
    mileage: 18000,
    image: '/lovable-uploads/a0fc94e2-1eb2-4620-a7b2-683b682ef442.png',
    description: 'Sports car in mint condition, V8 engine, leather seats.',
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    owner: {
      name: 'Michael Brown',
      phone: '(456) 789-0123'
    },
    priceDropped: true
  },
  {
    id: '5',
    make: 'Toyota',
    model: 'RAV4',
    year: 2019,
    price: 27000,
    location: 'Miami, FL',
    mileage: 35000,
    image: '/lovable-uploads/58ba3e72-43db-4509-a6cf-9d8caf57d3e2.png',
    description: 'SUV with excellent fuel economy, spacious interior.',
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    owner: {
      name: 'Sophia Williams',
      phone: '(567) 890-1234'
    }
  },
  {
    id: '6',
    make: 'Tesla',
    model: 'Model 3',
    year: 2021,
    price: 45000,
    location: 'San Francisco, CA',
    mileage: 12000,
    image: '/lovable-uploads/a8b97de2-773f-4f9c-8c0a-ee83e91713a4.png',
    description: 'Electric vehicle with autopilot, premium interior.',
    fuelType: 'Electric',
    transmission: 'Automatic',
    owner: {
      name: 'Oliver Davis',
      phone: '(678) 901-2345'
    },
    hotPick: true
  }
];

export const brandLogos = [
  {
    name: 'Audi',
    logo: '/lovable-uploads/31f56e17-9a43-408d-9c0d-45856ac04af2.png'
  },
  {
    name: 'Ford',
    logo: '/lovable-uploads/7086e42d-ffff-4932-965b-a3e318b698fb.png'
  },
  {
    name: 'Honda',
    logo: '/lovable-uploads/88e74a15-26b5-4846-9cdb-c0fce884d8dd.png'
  },
  {
    name: 'Toyota',
    logo: '/lovable-uploads/07e3dc1d-3989-4265-89e6-bdd9f3ceb574.png'
  },
  {
    name: 'BMW',
    logo: '/lovable-uploads/31f56e17-9a43-408d-9c0d-45856ac04af2.png'
  },
  {
    name: 'Mercedes',
    logo: '/lovable-uploads/31f56e17-9a43-408d-9c0d-45856ac04af2.png'
  }
];
