import { calculateLifePath, calculateMonthYear, calculateMonthDay, calculateDayYear } from '../utils/numerologyCalculations';

const NumerologyResult = ({ birthdate }) => {
  const lifePath = calculateLifePath(birthdate);
  const monthYear = calculateMonthYear(birthdate);
  const monthDay = calculateMonthDay(birthdate);
  const dayYear = calculateDayYear(birthdate);

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-2">Your Numerology Numbers</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-medium">Life Path Number:</p>
          <p className="text-xl">{lifePath}</p>
        </div>
        <div>
          <p className="font-medium">Month + Year Number:</p>
          <p className="text-xl">{monthYear}</p>
        </div>
        <div>
          <p className="font-medium">Month + Day Number:</p>
          <p className="text-xl">{monthDay}</p>
        </div>
        <div>
          <p className="font-medium">Day + Year Number:</p>
          <p className="text-xl">{dayYear}</p>
        </div>
      </div>
    </div>
  );
};

export default NumerologyResult;
