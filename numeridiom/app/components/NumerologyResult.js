import { calculateLifePath, calculateMonthYear, calculateMonthDay, calculateDayYear, calculateDayBorn } from '../utils/numerologyCalculations';

const NumerologyResult = ({ birthdate }) => {
  const lifePath = calculateLifePath(birthdate);
  const dayBorn = calculateDayBorn(birthdate);
  const monthYear = calculateMonthYear(birthdate);
  const monthDay = calculateMonthDay(birthdate);
  const dayYear = calculateDayYear(birthdate);

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-2">Your Numerology Numbers</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <h3 className="text-xl font-medium mb-2">Primary Numbers</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Life Path Number:</p>
              <p className="text-xl">{lifePath}</p>
            </div>
            <div>
              <p className="font-medium">Day Born Number:</p>
              <p className="text-xl">{dayBorn}</p>
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-4">
          <h3 className="text-xl font-medium mb-2">Secondary Numbers</h3>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="font-medium">Month + Year:</p>
              <p className="text-lg">{monthYear}</p>
            </div>
            <div>
              <p className="font-medium">Month + Day:</p>
              <p className="text-lg">{monthDay}</p>
            </div>
            <div>
              <p className="font-medium">Day + Year:</p>
              <p className="text-lg">{dayYear}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NumerologyResult;
