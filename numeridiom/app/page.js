"use client";

import { useState } from 'react';
import BirthdateInput from './components/BirthdateInput';
import NumerologyResult from './components/NumerologyResult';
import ZodiacResult from './components/ZodiacResult';

export default function Home() {
  const [birthdate, setBirthdate] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">NumerIdiom</h1>
      <BirthdateInput onBirthdateChange={setBirthdate} />
      {birthdate && (
        <div className="mt-8">
          <NumerologyResult birthdate={birthdate} />
          <ZodiacResult birthdate={birthdate} />
        </div>
      )}
    </main>
  );
}
