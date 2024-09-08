import React from 'react';
import { Chart, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useQuery } from 'react-query';
import axios from 'axios';
import 'chart.js/auto'; // Import Chart.js auto to handle dynamic imports
import { BeatLoader } from 'react-spinners'; 

Chart.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const fetchGraphData = async () => {
  const { data } = await axios.get('https://disease.sh/v3/covid-19/historical/all?lastdays=all/');
  return data;
};

const Charts: React.FC = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['covidGraphData'],
    queryFn: fetchGraphData,
  });

  if (isLoading) return (
    <div className="flex items-center justify-center h-64">
      <BeatLoader color="#3490dc" />
      <p className="ml-4">Loading chart data...</p>
    </div>
  );

  const chartData = {
    labels: Object.keys(data.cases),
    datasets: [
      {
        label: 'Cases',
        data: Object.values(data.cases),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        tension: 0.1, // Smooth the line
      },
    ],
  };

  // const options = {
  //   responsive: true,
  //   plugins: {
  //     legend: {
  //       position: 'top' as const,
  //       labels: {
  //         color: '#333',
  //       },
  //     },
  //     title: {
  //       display: true,
  //       text: 'COVID-19 Cases Over Time',
  //       color: '#333',
  //       font: {
  //         size: 18,
  //         weight: 'bold',
  //       },
  //     },
  //     tooltip: {
  //       backgroundColor: '#333',
  //       titleColor: '#fff',
  //       bodyColor: '#fff',
  //     },
  //   },
  //   scales: {
  //     x: {
  //       grid: {
  //         display: false,
  //       },
  //       ticks: {
  //         color: '#333',
  //       },
  //     },
  //     y: {
  //       beginAtZero: true,
  //       grid: {
  //         color: '#eee',
  //       },
  //       ticks: {
  //         color: '#333',
  //       },
  //     },
  //   },
  // };

  return (
    <div className="p-4 max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
      <Line data={chartData}  />
    </div>
  );
};

export default Charts;
