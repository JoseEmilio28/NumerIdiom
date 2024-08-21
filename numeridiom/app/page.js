"use client";

import { useState } from 'react';
import BirthdateInput from './components/BirthdateInput';
import NumerologyResult from './components/NumerologyResult';
import ZodiacResult from './components/ZodiacResult';

export default function Home() {
  const [birthdate, setBirthdate] = useState('');
  const [name, setName] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">NumerIdiom</h1>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Enter your full name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <BirthdateInput onBirthdateChange={setBirthdate} />
      {birthdate && name && (
        <div className="mt-8">
          <NumerologyResult birthdate={birthdate} name={name} />
          <ZodiacResult birthdate={birthdate} />
        </div>
      )}
    </main>
  );
}
