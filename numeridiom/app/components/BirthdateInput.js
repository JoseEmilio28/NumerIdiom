import { useState } from 'react';

const BirthdateInput = ({ onBirthdateChange }) => {
  const [date, setDate] = useState('');

  const handleChange = (e) => {
    const input = e.target.value;
    const formatted = input
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .slice(0, 10);

    setDate(formatted);

    if (formatted.length === 10) {
      onBirthdateChange(formatted);
    } else {
      onBirthdateChange('');
    }
  };

  return (
    <div className="w-full max-w-xs">
      <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-2">
        Enter your birthdate (MM/DD/YYYY):
      </label>
      <input
        type="text"
        id="birthdate"
        value={date}
        onChange={handleChange}
        placeholder="MM/DD/YYYY"
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default BirthdateInput;
