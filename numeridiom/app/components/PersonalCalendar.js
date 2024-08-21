import React, { useState, useEffect } from 'react';
import { calculateNumber } from '../utils/numerologyCalculations';

const PersonalCalendar = ({ birthdate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [personalYear, setPersonalYear] = useState('');
  const [personalMonth, setPersonalMonth] = useState('');
  const [personalDay, setPersonalDay] = useState('');

  useEffect(() => {
    calculatePersonalNumbers();
  }, [currentDate, birthdate]);

  const calculatePersonalNumbers = () => {
    const [birthMonth, birthDay] = birthdate.split('/');
    const currentYear = currentDate.getFullYear().toString();
    const currentMonth = (currentDate.getMonth() + 1).toString();
    const currentDay = currentDate.getDate().toString();

    const pYear = calculateNumber(calculateNumber(birthMonth, birthDay), currentYear);
    setPersonalYear(pYear);

    const pMonth = calculateNumber(pYear, currentMonth);
    setPersonalMonth(pMonth);

    const pDay = calculateNumber(pMonth, currentDay);
    setPersonalDay(pDay);
  };

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const calculateCurrentDayNumbers = () => {
    const today = new Date();
    setCurrentDate(today);
  };

  const renderCalendar = () => {
    const calendar = [];
    let dayCount = 1;

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(<td key={`empty-${j}`} className="p-2"></td>);
        } else if (dayCount > daysInMonth) {
          week.push(<td key={`empty-end-${j}`} className="p-2"></td>);
        } else {
          const date = `${currentDate.getMonth() + 1}/${dayCount}/${currentDate.getFullYear()}`;
          const personalDayNumber = calculateNumber(personalMonth, dayCount.toString());
          week.push(
            <td key={dayCount} className="p-2 border text-center">
              <div>{dayCount}</div>
              <div className="text-xs">PD={personalDayNumber}</div>
            </td>
          );
          dayCount++;
        }
      }
      calendar.push(<tr key={i}>{week}</tr>);
    }

    return calendar;
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Personal Calendar View</h2>
      <div className="flex justify-between mb-4">
        <button onClick={prevMonth} className="bg-blue-500 text-white px-4 py-2 rounded">Previous</button>
        <h3 className="text-xl font-medium">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <button onClick={nextMonth} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      </div>
      <div className="mb-4">
        <p>Personal Year: {personalYear}</p>
        <p>Personal Month: {personalMonth}</p>
        <p>Personal Day: {personalDay}</p>
      </div>
      <button onClick={calculateCurrentDayNumbers} className="bg-green-500 text-white px-4 py-2 rounded mb-4">
        Calculate Current Day Numbers
      </button>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
              <th key={day} className="p-2 border">{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {renderCalendar()}
        </tbody>
      </table>
    </div>
  );
};

export default PersonalCalendar;
