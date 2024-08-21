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
      <p>This page will contain various datasets used in the application.</p>
      {/* Add more content for datasets here */}
    </main>
  );
}
