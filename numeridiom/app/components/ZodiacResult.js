import { useState } from 'react';
import { getChineseZodiac, getSiderealSunSign } from '../utils/zodiacCalculations';

const ZodiacResult = ({ birthdate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const chineseZodiac = getChineseZodiac(birthdate);
  const siderealSunSign = getSiderealSunSign(birthdate);

  return (
    <div className="mb-8">
      <button
        className={`w-full p-4 rounded-lg shadow ${isExpanded ? 'bg-blue-500 text-white' : 'bg-white'}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Zodiacs
      </button>
      {isExpanded && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Your Zodiac Signs</h2>
          <p className="text-xl mb-2">Chinese Zodiac: {chineseZodiac}</p>
          <p className="text-xl">Sidereal Sun Sign: {siderealSunSign}</p>
        </div>
      )}
    </div>
  );
};

export default ZodiacResult;
