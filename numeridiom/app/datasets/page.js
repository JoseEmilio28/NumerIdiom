"use client";

import Link from 'next/link';

export default function Datasets() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative">
      <Link href="/" className="absolute top-4 left-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
      <h1 className="text-4xl font-bold mb-8">Datasets</h1>
      
      <div className="w-full max-w-2xl">
        <Category 
          title="UFC" 
          chartsLink="/datasets/ufc/charts" 
          infoLink="/datasets/ufc/info" 
        />
        <Category 
          title="Boxing" 
          chartsLink="/datasets/boxing/charts" 
          infoLink="/datasets/boxing/info" 
        />
      </div>
    </main>
  );
}

function Category({ title, chartsLink, infoLink }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex space-x-4">
        <Link href={chartsLink}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Charts & Graphs
          </button>
        </Link>
        <Link href={infoLink}>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Information
          </button>
        </Link>
      </div>
    </div>
  );
}
