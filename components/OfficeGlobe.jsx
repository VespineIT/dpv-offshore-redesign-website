'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useEffect } from 'react';

// Fix for default Leaflet markers in Next.js/Webpack
const icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41], 
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

export default function OfficeGlobe() {
  const locations = [
    { id: 1, name: "Headquarters (Colombo)", position: [6.9271, 79.8612] },
    { id: 2, name: "UK Office", position: [51.5074, -0.1278] },
    { id: 3, name: "Singapore Hub", position: [1.3521, 103.8198] },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center bg-white py-20">
      <h2 className="text-brand-orange font-bold text-2xl mb-4">OUR LOCATIONS</h2>
      <p className="text-gray-500 mb-8">Global Reach, Local Presence.</p>
      
      <div className="w-full h-[600px] px-4 md:px-10 z-0">
        <MapContainer 
            center={[20, 0]} 
            zoom={2} 
            scrollWheelZoom={false} 
            className="w-full h-full rounded-xl shadow-lg z-0"
        >
          {/* Use standard OpenStreetMap tiles (Free) */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          
          {locations.map((loc) => (
            <Marker key={loc.id} position={loc.position} icon={icon}>
              <Popup>{loc.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}