import dynamic from 'next/dynamic';
import Link from 'next/link';

const DynamicHomeContent = dynamic(() => import('../components/HomeContent'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 relative">
      <Link href="/datasets" className="absolute top-4 left-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </Link>
      <h1 className="text-4xl font-bold mb-8">NumerIdiom</h1>
      <DynamicHomeContent />
    </main>
  );
}
