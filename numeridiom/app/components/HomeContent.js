"use client";

import { useState } from 'react';
import BirthdateInput from './BirthdateInput';
import NumerologyResult from './NumerologyResult';
import ZodiacResult from './ZodiacResult';
import NormalCalendar from './NormalCalendar';
import PersonalCalendar from './PersonalCalendar';

export default function HomeContent() {
  const [birthdate, setBirthdate] = useState('');
  const [activeCalendar, setActiveCalendar] = useState(null);

  return (
    <>
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
    </>
  );
}
