import { useState } from 'react';
import {
  calculateLifePath,
  calculateDayBorn,
  calculatePersonalityNumber,
  calculateSoulUrgeNumber,
  calculateDestinyNumber,
  calculateKarmicDebtNumber,
  calculateExpressionNumber,
  calculateMaturityNumber,
} from '../utils/numerologyCalculations';

const NumerologyResult = ({ birthdate, name }) => {
  const [activeTab, setActiveTab] = useState('primary');

  const lifePath = calculateLifePath(birthdate);
  const dayBorn = calculateDayBorn(birthdate);
  const personalityNumber = calculatePersonalityNumber(name);
  const soulUrgeNumber = calculateSoulUrgeNumber(name);
  const destinyNumber = calculateDestinyNumber(birthdate);
  const karmicDebtNumber = calculateKarmicDebtNumber(birthdate);
  const expressionNumber = calculateExpressionNumber(name);
  const maturityNumber = calculateMaturityNumber(birthdate);

  const primaryNumbers = [
    { title: 'Life Path Number', value: lifePath },
    { title: 'Day Born Number', value: dayBorn },
    { title: 'Destiny Number', value: destinyNumber },
    { title: 'Expression Number', value: expressionNumber },
  ];

  const secondaryNumbers = [
    { title: 'Personality Number', value: personalityNumber },
    { title: 'Soul Urge Number', value: soulUrgeNumber },
    { title: 'Karmic Debt Number', value: karmicDebtNumber },
    { title: 'Maturity Number', value: maturityNumber },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Your Numerology Numbers</h2>
      <div className="mb-4">
        <button
          className={`mr-2 px-4 py-2 rounded ${activeTab === 'primary' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('primary')}
        >
          Primary Numbers
        </button>
        <button
          className={`px-4 py-2 rounded ${activeTab === 'secondary' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveTab('secondary')}
        >
          Secondary Numbers
        </button>
      </div>
      <div className="grid grid-cols-2 gap-6">
        {(activeTab === 'primary' ? primaryNumbers : secondaryNumbers).map((number, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-medium mb-2">{number.title}</h3>
            <p className="text-3xl font-bold">{number.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumerologyResult;
