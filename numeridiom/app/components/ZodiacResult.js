import { getVietnameseZodiac } from '../utils/zodiacCalculations';

const ZodiacResult = ({ birthdate }) => {
  const zodiacSign = getVietnameseZodiac(birthdate);

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Your Vietnamese Zodiac Sign</h2>
      <p className="text-xl">{zodiacSign}</p>
    </div>
  );
};

export default ZodiacResult;
