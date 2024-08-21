import {
  calculateLifePath,
  calculateDayBorn,
  calculateMonthYear,
  calculateMonthDay,
  calculateDayYear,
} from '../utils/numerologyCalculations';

const NumerologyResult = ({ birthdate }) => {
  const lifePath = calculateLifePath(birthdate);
  const dayBorn = calculateDayBorn(birthdate);
  const monthYear = calculateMonthYear(birthdate);
  const monthDay = calculateMonthDay(birthdate);
  const dayYear = calculateDayYear(birthdate);

  const numbers = [
    { title: 'Life Path Number', value: lifePath },
    { title: 'Day Born Number', value: dayBorn },
    { title: 'Month + Year', value: monthYear },
    { title: 'Month + Day', value: monthDay },
    { title: 'Day + Year', value: dayYear },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Your Numerology Numbers</h2>
      <div className="grid grid-cols-2 gap-6">
        {numbers.map((number, index) => (
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
