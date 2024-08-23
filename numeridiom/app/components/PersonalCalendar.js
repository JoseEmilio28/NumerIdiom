import React, { useState, useEffect } from 'react';
import { calculateNumber, reduceNumber } from '../utils/numerologyCalculations';

const PersonalCalendar = ({ birthdate }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [personalYear, setPersonalYear] = useState('');
  const [personalMonth, setPersonalMonth] = useState('');
  const [personalDay, setPersonalDay] = useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [personalMonthChanges, setPersonalMonthChanges] = useState([]);

  useEffect(() => {
    calculatePersonalNumbers();
    calculatePersonalMonthChanges();
  }, [currentDate, birthdate]);

  const calculatePersonalNumbers = () => {
    const [birthMonth, birthDay, birthYear] = birthdate.split('/');
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    // Check if the birthday has occurred this year
    const birthdayThisYear = new Date(currentYear, parseInt(birthMonth) - 1, parseInt(birthDay));
    const isAfterBirthday = currentDate >= birthdayThisYear;

    // Calculate Personal Year
    const personalYearNumber = calculateNumber(calculateNumber(birthMonth, birthDay), isAfterBirthday ? currentYear.toString() : (currentYear - 1).toString());
    setPersonalYear(personalYearNumber);

    // Calculate Personal Month
    const personalMonthNumber = calculateNumber(personalYearNumber, currentMonth.toString());
    setPersonalMonth(personalMonthNumber);

    // Calculate Personal Day
    const personalDayNumber = calculateNumber(personalMonthNumber, currentDay.toString());
    setPersonalDay(personalDayNumber);
  };

  const calculatePersonalMonthChanges = () => {
    const [birthMonth, birthDay, birthYear] = birthdate.split('/');
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const daysInMonth = new Date(currentYear, currentMonth, 0).getDate();
    const changes = [];

    const birthdayThisYear = new Date(currentYear, parseInt(birthMonth) - 1, parseInt(birthDay));
    const isAfterBirthday = currentDate >= birthdayThisYear;
    const personalYearNumber = calculateNumber(calculateNumber(birthMonth, birthDay), isAfterBirthday ? currentYear.toString() : (currentYear - 1).toString());

    // Calculate the personal month number for the current month
    const personalMonthNumber = calculateNumber(personalYearNumber, currentMonth.toString());

    // Determine the day when the personal month changes
    let changeDay = parseInt(birthDay);
    if (changeDay > daysInMonth) {
      changeDay = daysInMonth;
    }

    // If the current date is before the change day, use the previous month's number
    if (currentDate.getDate() < changeDay) {
      const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
      const prevMonthNumber = calculateNumber(personalYearNumber, prevMonth.toString());
      changes.push({ day: 1, number: prevMonthNumber });
    }

    changes.push({ day: changeDay, number: personalMonthNumber });

    setPersonalMonthChanges(changes);
  };

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
          const fullPersonalDayNumber = calculateNumber(personalMonth, dayCount.toString());
          const personalDayNumber = reduceNumber(fullPersonalDayNumber);
          const personalMonthChange = personalMonthChanges.find(change => change.day === dayCount);
          const showFullEquation = [11, 22, 33].includes(parseInt(fullPersonalDayNumber));
          week.push(
            <td key={dayCount} className="p-2 border text-center relative">
              <div>{dayCount}</div>
              <div className="text-xs">
                PD={personalDayNumber}
                {showFullEquation && (
                  <span className="ml-1 cursor-pointer" title={`${personalMonth} + ${dayCount} = ${fullPersonalDayNumber}`}>
                    i
                  </span>
                )}
              </div>
              {personalMonthChange && (
                <div className="text-xs text-blue-600">PM={personalMonthChange.number}</div>
              )}
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
      <p className="mb-4">
        Your <span 
          className="underline cursor-pointer text-blue-600" 
          onClick={() => setShowInfo(!showInfo)}
        >
          Personal Numbers
        </span> for {currentDate.toLocaleDateString()}
      </p>
      {showInfo && (
        <div className="bg-gray-100 p-4 rounded-lg mb-4">
          <p>Personal Year: Birth month + Birth day + Current year</p>
          <p>Personal Month: Personal Year + Current month</p>
          <p>Personal Day: Personal Month + Current day</p>
        </div>
      )}
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
