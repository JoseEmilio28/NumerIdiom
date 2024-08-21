import React, { useState } from 'react';
import { calculateLifePath } from '../utils/numerologyCalculations';

const NormalCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
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
          const lifePath = calculateLifePath(date);
          week.push(
            <td key={dayCount} className="p-2 border text-center">
              <div>{dayCount}</div>
              <div className="text-xs">LP={lifePath}</div>
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
      <h2 className="text-2xl font-semibold mb-4">Normal Calendar View</h2>
      <div className="flex justify-between mb-4">
        <button onClick={prevMonth} className="bg-blue-500 text-white px-4 py-2 rounded">Previous</button>
        <h3 className="text-xl font-medium">
          {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h3>
        <button onClick={nextMonth} className="bg-blue-500 text-white px-4 py-2 rounded">Next</button>
      </div>
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

export default NormalCalendar;
