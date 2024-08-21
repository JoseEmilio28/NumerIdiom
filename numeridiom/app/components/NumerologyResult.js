import { useState } from 'react';
import {
  calculateLifePath,
  calculateDayBorn,
  calculateMonthYear,
  calculateMonthDay,
  calculateDayYear,
} from '../utils/numerologyCalculations';

const NumerologyResult = ({ birthdate }) => {
  const [activeTab, setActiveTab] = useState(null);

  const lifePath = calculateLifePath(birthdate);
  const dayBorn = calculateDayBorn(birthdate);
  const monthYear = calculateMonthYear(birthdate);
  const monthDay = calculateMonthDay(birthdate);
  const dayYear = calculateDayYear(birthdate);

  const primaryNumbers = [
    { title: 'Life Path Number', value: lifePath },
    { title: 'Day Born Number', value: dayBorn },
  ];

  const secondaryNumbers = [
    { title: 'Month + Year', value: monthYear },
    { title: 'Month + Day', value: monthDay },
    { title: 'Day + Year', value: dayYear },
  ];

  const renderNumbers = (numbers) => (
    <div className="grid grid-cols-2 gap-4">
      {numbers.map((number, index) => (
        <div key={index} className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">{number.title}</h3>
          <p className="text-3xl font-bold">{number.value}</p>
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
    </div>
  );
};

export default NumerologyResult;
