"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title } from 'chart.js';
import { Pie, Bar } from 'react-chartjs-2';
import { ufcFighters } from '../../../data/ufcFighters';
import { processUFCData } from '../../../utils/dataProcessing';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

export default function UFCCharts() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const data = processUFCData(ufcFighters);
    setChartData(data);
  }, []);

  if (!chartData) {
    return <div>Loading...</div>;
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        font: {
          size: 16,
        },
      },
    },
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-24 relative">
      <Link href="/datasets" className="absolute top-4 left-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
      <h1 className="text-4xl font-bold mb-8">UFC Charts & Graphs</h1>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Life Path Distribution</h2>
          <div className="h-80">
            <Pie data={chartData.lifePath} options={{...chartOptions, plugins: {...chartOptions.plugins, title: {...chartOptions.plugins.title, text: 'Life Path Distribution'}}}} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Day Born Distribution</h2>
          <div className="h-80">
            <Bar data={chartData.dayBorn} options={{...chartOptions, plugins: {...chartOptions.plugins, title: {...chartOptions.plugins.title, text: 'Day Born Distribution'}}}} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Chinese Zodiac Distribution</h2>
          <div className="h-80">
            <Pie data={chartData.chineseZodiac} options={{...chartOptions, plugins: {...chartOptions.plugins, title: {...chartOptions.plugins.title, text: 'Chinese Zodiac Distribution'}}}} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Sidereal Sun Sign Distribution</h2>
          <div className="h-80">
            <Bar data={chartData.siderealSunSign} options={{...chartOptions, plugins: {...chartOptions.plugins, title: {...chartOptions.plugins.title, text: 'Sidereal Sun Sign Distribution'}}}} />
          </div>
        </div>
      </div>
    </main>
  );
}
