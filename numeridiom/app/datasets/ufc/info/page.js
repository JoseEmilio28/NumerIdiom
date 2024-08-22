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
            <ul className="list-disc pl-5">
              {division.fighters.map((fighter, fighterIndex) => (
                <li key={fighterIndex} className="mb-2">
                  <span className="font-medium">{fighter.name}</span> - Born: {fighter.dob}, 
                  Life Path: {fighter.lifePath}, Day Born: {fighter.dayBorn}, 
                  Chinese Zodiac: {fighter.chineseZodiac}, Sidereal Sun Sign: {fighter.siderealSunSign}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
