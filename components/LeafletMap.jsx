'use client';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const icon = typeof window !== 'undefined' ? L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
}) : null;

export default function LeafletMap({ locations }) {
  const [map, setMap] = useState(null);

  // MANUALLY DESTROY THE MAP ON UNMOUNT
  useEffect(() => {
    return () => {
      if (map) {
        map.remove(); // This is the crucial line
      }
    };
  }, [map]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <MapContainer 
        center={[20, 0]} 
        zoom={2} 
        scrollWheelZoom={false} 
        className="w-full h-full"
        ref={setMap} // This captures the Leaflet instance
      >
        <TileLayer
          attribution='&copy; OpenStreetMap'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.id} position={loc.position} icon={icon}>
            <Popup>{loc.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}