'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const customIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  iconRetinaUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function MapComponent({ locations }) {
  const [mounted, setMounted] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    // Final cleanup on unmount
    return () => {
      setMounted(false);
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  // If we aren't mounted in the browser yet, don't even 
  // let the MapContainer code touch the execution stack.
  if (!mounted) return <div className="h-full bg-gray-100 animate-pulse" />;

  return (
    <div id="map-wrapper" className="w-full h-full">
      <MapContainer 
        center={[20, 0]} 
        zoom={2} 
        scrollWheelZoom={false} 
        className="w-full h-full rounded-xl shadow-lg"
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.id} position={loc.position} icon={customIcon}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}