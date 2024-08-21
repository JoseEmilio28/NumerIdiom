"use client";

import { useState } from 'react';
import Link from 'next/link';
import BirthdateInput from './components/BirthdateInput';
import NumerologyResult from './components/NumerologyResult';
import ZodiacResult from './components/ZodiacResult';
import ChineseZodiacCalculator from './components/ChineseZodiacCalculator';
import NormalCalendar from './components/NormalCalendar';
import PersonalCalendar from './components/PersonalCalendar';

export default function Home() {
  const [birthdate, setBirthdate] = useState('');
  const [activeCalendar, setActiveCalendar] = useState(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative">
      <Link href="/datasets" className="absolute top-4 left-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Link>
      <h1 className="text-4xl font-bold mb-8">NumerIdiom</h1>
      <BirthdateInput onBirthdateChange={setBirthdate} />
      {birthdate && (
        <div className="mt-8 w-full max-w-4xl">
          <NumerologyResult birthdate={birthdate} />
          <ZodiacResult birthdate={birthdate} />
          <ChineseZodiacCalculator />
          <div className="mt-8 flex justify-center space-x-4">
            <button
              onClick={() => setActiveCalendar('normal')}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Normal Calendar
            </button>
            <button
              onClick={() => setActiveCalendar('personal')}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Personal Calendar
            </button>
          </div>
          {activeCalendar === 'normal' && <NormalCalendar />}
          {activeCalendar === 'personal' && <PersonalCalendar birthdate={birthdate} />}
        </div>
      )}
    </main>
  );
}
