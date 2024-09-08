import React from 'react';
import Charts from '../components/Charts';
import Map from '../components/Map';

const ChartsAndMapsPage: React.FC = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-green-600 mb-8 text-center">
        Charts and Maps
      </h1>
      <Charts />
      <Map />
    </div>
  );
};

export default ChartsAndMapsPage;
