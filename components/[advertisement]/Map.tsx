"use client"
import 'leaflet/dist/leaflet.css';
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Icon } from 'leaflet'; 
import axios from 'axios';

const defaultIcon = new Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

interface LeafletMapProps {
  address: string;
}

const LeafletMap: React.FC<LeafletMapProps> = ({ address }) => {
  const [position, setPosition] = useState<[number, number] | null>(null);

  useEffect(() => {
    const fetchGeoLocation = async () => {
      try {
        const response = await axios.get(`https://nominatim.openstreetmap.org/search?format=json&q=${address}`);
        if (response.data?.length) {
          const location = response.data[0];
          setPosition([Number(location.lat), Number(location.lon)]);
        }
      } catch (error) {
        console.error('Error fetching geolocation:', error);
      }
    };

    if (address) fetchGeoLocation();
  }, [address]);

  if (!position) return null;

  return (
    <MapContainer center={position} zoom={16} style={{ height: "400px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position} icon={defaultIcon} /> 
    </MapContainer>
  );
};

export default LeafletMap;
