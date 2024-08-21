import { useState } from 'react';
import { getChineseZodiac } from '../utils/zodiacCalculations';

const ChineseZodiacCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [chineseZodiac, setChineseZodiac] = useState('');

  const handleCalculate = () => {
    if (birthdate) {
      const zodiac = getChineseZodiac(birthdate);
      setChineseZodiac(zodiac);
    }
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Chinese Zodiac Calculator</h2>
      <div className="flex items-center space-x-4">
        <input
          type="date"
          value={birthdate}
          onChange={(e) => setBirthdate(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <button
          onClick={handleCalculate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Calculate
        </button>
      </div>
      {chineseZodiac && (
        <p className="mt-4 text-xl">
          Your Chinese Zodiac sign is: <strong>{chineseZodiac}</strong>
        </p>
      )}
    </div>
  );
};

export default ChineseZodiacCalculator;
