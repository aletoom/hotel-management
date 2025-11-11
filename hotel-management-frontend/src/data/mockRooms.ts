export interface Room {
  id: number;
  roomNumber: string;
  roomType: string;
  floor: number;
  pricePerNight: number;
  capacity: number;
  bedType: string;
  amenities: string[];
  images: string[];
  isAvailable: boolean;
  description: string;
}

export const mockRooms: Room[] = [
  {
    id: 1,
    roomNumber: "201",
    roomType: "Deluxe King Room",
    floor: 2,
    pricePerNight: 189.99,
    capacity: 2,
    bedType: "1 King Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Flat Screen TV", "City View"],
    images: ["https://images.unsplash.com/photo-1611892440504-42a792e24d32"],
    isAvailable: true,
    description: "Spacious room with modern amenities and stunning city views. Perfect for couples."
  },
  {
    id: 2,
    roomNumber: "305",
    roomType: "Executive Suite",
    floor: 3,
    pricePerNight: 299.99,
    capacity: 4,
    bedType: "1 King Bed + Sofa Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Flat Screen TV", "Ocean View", "Jacuzzi", "Living Room"],
    images: ["https://images.unsplash.com/photo-1582719478250-c89cae4dc85b"],
    isAvailable: true,
    description: "Luxurious suite with separate living area, breathtaking ocean views, and premium amenities."
  },
  {
    id: 3,
    roomNumber: "412",
    roomType: "Standard Double Room",
    floor: 4,
    pricePerNight: 129.99,
    capacity: 2,
    bedType: "2 Double Beds",
    amenities: ["Free WiFi", "Air Conditioning", "Flat Screen TV", "Garden View"],
    images: ["https://images.unsplash.com/photo-1590490360182-c33d57733427"],
    isAvailable: true,
    description: "Comfortable room with twin beds, ideal for friends or small families."
  },
  {
    id: 4,
    roomNumber: "508",
    roomType: "Family Suite",
    floor: 5,
    pricePerNight: 349.99,
    capacity: 6,
    bedType: "2 Queen Beds + 2 Single Beds",
    amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Flat Screen TV", "City View", "Kitchenette", "2 Bathrooms"],
    images: ["https://images.unsplash.com/photo-1566665797739-1674de7a421a"],
    isAvailable: true,
    description: "Spacious family suite with multiple rooms, perfect for families traveling together."
  },
  {
    id: 5,
    roomNumber: "610",
    roomType: "Presidential Suite",
    floor: 6,
    pricePerNight: 599.99,
    capacity: 4,
    bedType: "1 King Bed + 1 Queen Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Flat Screen TV", "Panoramic View", "Jacuzzi", "Private Balcony", "Butler Service", "Full Kitchen"],
    images: ["https://images.unsplash.com/photo-1631049307264-da0ec9d70304"],
    isAvailable: true,
    description: "The pinnacle of luxury with panoramic views, butler service, and exclusive amenities."
  },
  {
    id: 6,
    roomNumber: "315",
    roomType: "Deluxe Twin Room",
    floor: 3,
    pricePerNight: 169.99,
    capacity: 2,
    bedType: "2 Twin Beds",
    amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Flat Screen TV", "Pool View"],
    images: ["https://images.unsplash.com/photo-1618773928121-c32242e63f39"],
    isAvailable: false,
    description: "Modern twin room with pool views and contemporary design."
  },
  {
    id: 7,
    roomNumber: "220",
    roomType: "Standard King Room",
    floor: 2,
    pricePerNight: 149.99,
    capacity: 2,
    bedType: "1 King Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Flat Screen TV", "Mountain View"],
    images: ["https://images.unsplash.com/photo-1595576508898-0ad5c879a061"],
    isAvailable: true,
    description: "Cozy king room with beautiful mountain views and modern comforts."
  },
  {
    id: 8,
    roomNumber: "405",
    roomType: "Business Suite",
    floor: 4,
    pricePerNight: 259.99,
    capacity: 2,
    bedType: "1 Queen Bed",
    amenities: ["Free WiFi", "Air Conditioning", "Mini Bar", "Flat Screen TV", "City View", "Work Desk", "Meeting Space"],
    images: ["https://images.unsplash.com/photo-1596394516093-501ba68a0ba6"],
    isAvailable: true,
    description: "Professional suite designed for business travelers with dedicated workspace."
  }
];
