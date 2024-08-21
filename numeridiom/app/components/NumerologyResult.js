import { useState } from 'react';
import {
  calculateLifePath,
  calculateDayBorn,
  calculateDayOfYear,
  calculateMonthYear,
  calculateMonthDay,
  calculateDayYear,
} from '../utils/numerologyCalculations';
import { lifePathInfo } from '../utils/lifePathInfo';

const NumerologyResult = ({ birthdate }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [activeInfo, setActiveInfo] = useState(null);

  const lifePath = calculateLifePath(birthdate);
  const dayBorn = calculateDayBorn(birthdate);
  const dayOfYear = calculateDayOfYear(birthdate);
  const monthYear = calculateMonthYear(birthdate);
  const monthDay = calculateMonthDay(birthdate);
  const dayYear = calculateDayYear(birthdate);

  const primaryNumbers = [
    { title: 'Life Path Number', value: lifePath },
    { title: 'Day Born Number', value: dayBorn },
    { title: 'Day of Year', value: dayOfYear },
  ];

  const secondaryNumbers = [
    { title: 'Month + Year', value: monthYear },
    { title: 'Month + Day', value: monthDay },
    { title: 'Day + Year', value: dayYear },
  ];

  const renderNumbers = (numbers) => (
    <div className="grid grid-cols-2 gap-4">
      {numbers.map((number, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow relative">
          <h3 className="text-lg font-medium mb-2">{number.title}</h3>
          <p className="text-3xl font-bold">{number.value}</p>
          {number.title === 'Life Path Number' && (
            <button
              className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
              onClick={() => setActiveInfo(activeInfo === number.value ? null : number.value)}
            >
              i
            </button>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Your Numerology Numbers</h2>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <button
          className={`p-4 rounded-lg shadow ${activeTab === 'primary' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          onClick={() => setActiveTab(activeTab === 'primary' ? null : 'primary')}
        >
          Primary Numbers
        </button>
        <button
          className={`p-4 rounded-lg shadow ${activeTab === 'secondary' ? 'bg-blue-500 text-white' : 'bg-white'}`}
          onClick={() => setActiveTab(activeTab === 'secondary' ? null : 'secondary')}
        >
          Secondary Numbers
        </button>
      </div>
      {activeTab === 'primary' && renderNumbers(primaryNumbers)}
      {activeTab === 'secondary' && renderNumbers(secondaryNumbers)}
      {activeInfo && lifePathInfo[activeInfo] && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow">
          <h3 className="text-xl font-semibold mb-2">Life Path {activeInfo}</h3>
          <p className="mb-2">{lifePathInfo[activeInfo].description}</p>
          <p><strong>Suggested Careers:</strong> {lifePathInfo[activeInfo].careers}</p>
        </div>
      )}
    </div>
  );
};

export default NumerologyResult;
