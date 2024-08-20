import { calculateLifePath } from '../utils/numerologyCalculations';

const NumerologyResult = ({ birthdate }) => {
  const lifePath = calculateLifePath(birthdate);
  const [fullNumber, reducedNumber] = lifePath.split('/');

  return (
    <div className="mb-4">
      <h2 className="text-2xl font-semibold mb-2">Your Life Path Number</h2>
      <p className="text-xl">
        {fullNumber}
        {reducedNumber && <span>/{reducedNumber}</span>}
      </p>
    </div>
  );
};

export default NumerologyResult;
