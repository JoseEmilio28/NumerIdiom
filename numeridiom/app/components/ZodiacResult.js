import { useState } from 'react';
import { getChineseZodiac } from '../utils/zodiacCalculations';

const ZodiacResult = ({ birthdate }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const zodiacSign = getChineseZodiac(birthdate);

  return (
    <div className="mb-8">
      <button
        className={`w-full p-4 rounded-lg shadow ${isExpanded ? 'bg-blue-500 text-white' : 'bg-white'}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        Chinese Zodiac
      </button>
      {isExpanded && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow">
          <h2 className="text-2xl font-semibold mb-2">Your Chinese Zodiac Sign</h2>
          <p className="text-xl">{zodiacSign}</p>
        </div>
      )}
    </div>
  );
};

export default ZodiacResult;
