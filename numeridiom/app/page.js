"use client";

import { useState } from 'react';
import BirthdateInput from './components/BirthdateInput';
import NumerologyResult from './components/NumerologyResult';
import ZodiacResult from './components/ZodiacResult';
import NormalCalendar from './components/NormalCalendar';
import PersonalCalendar from './components/PersonalCalendar';

export default function Home() {
  const [birthdate, setBirthdate] = useState('');
  const [activeCalendar, setActiveCalendar] = useState(null);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">NumerIdiom</h1>
      <BirthdateInput onBirthdateChange={setBirthdate} />
      {birthdate && (
        <div className="mt-8 w-full max-w-4xl">
          <NumerologyResult birthdate={birthdate} />
          <ZodiacResult birthdate={birthdate} />
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
