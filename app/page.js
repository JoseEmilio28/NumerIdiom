import React from 'react';
import PersonalCalendar from '../components/PersonalCalendar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold mb-8">Numeridiom</h1>
      <PersonalCalendar birthdate="01/01/1990" />
    </main>
  );
}
