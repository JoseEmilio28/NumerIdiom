"use client";

import Link from 'next/link';
import { ufcFighters } from '../../../data/ufcFighters';

export default function UFCInfo() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 relative">
      <Link href="/datasets" className="absolute top-4 left-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
      </Link>
      <h1 className="text-4xl font-bold mb-8">UFC Information</h1>
      <div className="w-full max-w-4xl">
        {ufcFighters.map((division, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">{division.division}</h2>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 p-2">Name</th>
                  <th className="border border-gray-300 p-2">Date of Birth</th>
                  <th className="border border-gray-300 p-2">Life Path</th>
                  <th className="border border-gray-300 p-2">Day Born</th>
                  <th className="border border-gray-300 p-2">Chinese Zodiac</th>
                  <th className="border border-gray-300 p-2">Sidereal Sun Sign</th>
                </tr>
              </thead>
              <tbody>
                {division.fighters.map((fighter, fighterIndex) => (
                  <tr key={fighterIndex} className={fighterIndex % 2 === 0 ? 'bg-gray-50' : ''}>
                    <td className="border border-gray-300 p-2">{fighter.name}</td>
                    <td className="border border-gray-300 p-2">{fighter.dob}</td>
                    <td className="border border-gray-300 p-2">{fighter.lifePath}</td>
                    <td className="border border-gray-300 p-2">{fighter.dayBorn}</td>
                    <td className="border border-gray-300 p-2">{fighter.chineseZodiac}</td>
                    <td className="border border-gray-300 p-2">{fighter.siderealSunSign}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </main>
  );
}
