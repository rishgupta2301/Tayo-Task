import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useQuery } from 'react-query';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import { BeatLoader } from 'react-spinners'; // For a better loading spinner

const fetchMapData = async () => {
  const { data } = await axios.get('https://disease.sh/v3/covid-19/countries');
  return data;
};

const Map: React.FC = () => {
  const { data, isLoading } = useQuery('covidMapData', fetchMapData);

  if (isLoading) return (
    <div className="flex items-center justify-center h-64">
      <BeatLoader color="#3490dc" />
      <p className="ml-4">Loading map data...</p>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <MapContainer
        center={[20, 0] as [number, number]} // Specify as a tuple [lat, lng]
        zoom={2}
        style={{ height: '500px', width: '100%' }}
        className="rounded-lg shadow-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {data.map((country: any) => (
          <Marker
            key={country.countryInfo.iso3}
            position={[country.countryInfo.lat, country.countryInfo.long]}
          >
            <Popup>
              <div className="p-2">
                <strong className="text-lg">{country.country}</strong>
                <div className="mt-2 text-sm text-gray-700">
                  <p><strong>Active:</strong> {country.active}</p>
                  <p><strong>Recovered:</strong> {country.recovered}</p>
                  <p><strong>Deaths:</strong> {country.deaths}</p>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
