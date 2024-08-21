import { calculateLifePath, calculateDayBorn } from '../utils/numerologyCalculations';

const NumerologyResult = ({ birthdate }) => {
  const lifePath = calculateLifePath(birthdate);
  const dayBorn = calculateDayBorn(birthdate);

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Your Numerology Numbers</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Life Path Number</h3>
          <p className="text-3xl font-bold">{lifePath}</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-2">Day Born Number</h3>
          <p className="text-3xl font-bold">{dayBorn}</p>
        </div>
      </div>
    </div>
  );
};

export default NumerologyResult;
