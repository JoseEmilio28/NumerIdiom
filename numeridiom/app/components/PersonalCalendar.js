import React, { useState, useEffect } from 'react';
import { calculateNumber, reduceNumber, addDigits } from '../utils/numerologyCalculations';

const PersonalCalendar = ({ birthdate }) => {
  const calculatePersonalDay = (personalMonth, currentDay) => {
    const sum = addDigits(parseInt(personalMonth)) + addDigits(parseInt(currentDay));
    if (sum === 28) {
      return '28';
    }
    return reduceNumber(sum, true).toString();
  };
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

    // Determine if we're in the new Personal Year
    const birthdayThisYear = new Date(currentYear, parseInt(birthMonth) - 1, parseInt(birthDay));
    const isNewPersonalYear = currentDate >= birthdayThisYear;

    // Calculate Personal Year
    const personalYearNumber = calculateNumber(
      calculateNumber(birthMonth, birthDay),
      currentYear.toString()
    );
    setPersonalYear(personalYearNumber);

    // Calculate Personal Month
    let personalMonthNumber;
    if (currentMonth > parseInt(birthMonth) || (currentMonth === parseInt(birthMonth) && currentDay >= parseInt(birthDay))) {
      // We're in or past the birth month
      personalMonthNumber = calculateNumber(personalYearNumber, currentMonth.toString());
    } else {
      // We're before the birth month
      const adjustedMonth = currentMonth + 12 - parseInt(birthMonth);
      personalMonthNumber = calculateNumber(
        calculateNumber(calculateNumber(birthMonth, birthDay), (currentYear - 1).toString()),
        adjustedMonth.toString()
      );
    }
    setPersonalMonth(personalMonthNumber);

    // Calculate Personal Day
    const personalDayNumber = calculatePersonalDay(personalMonthNumber, currentDay.toString());
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

    // Calculate the previous month's number
    const prevMonth = currentMonth === 1 ? 12 : currentMonth - 1;
    const prevMonthNumber = calculateNumber(personalYearNumber, prevMonth.toString());

    // Add the previous month's number from day 1 to the day before the change
    changes.push({ day: 1, number: prevMonthNumber });

    // Add the current month's number from the change day
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
    const [birthMonth, birthDay] = birthdate.split('/');
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;

    // Determine if we're in the new Personal Year
    const birthdayThisYear = new Date(currentYear, parseInt(birthMonth) - 1, parseInt(birthDay));
    const isNewPersonalYear = currentDate >= birthdayThisYear;

    // Calculate Personal Year
    const personalYearNumber = calculateNumber(
      calculateNumber(birthMonth, birthDay),
      isNewPersonalYear ? currentYear.toString() : (currentYear - 1).toString()
    );

    // Calculate Personal Month
    const calculatePersonalMonthForDay = (day) => {
      if (currentMonth > parseInt(birthMonth) || (currentMonth === parseInt(birthMonth) && day >= parseInt(birthDay))) {
        // We're in or past the birth month
        return calculateNumber(personalYearNumber, currentMonth.toString());
      } else {
        // We're before the birth month
        const adjustedMonth = currentMonth + 12 - parseInt(birthMonth);
        return calculateNumber(
          calculateNumber(calculateNumber(birthMonth, birthDay), (currentYear - 1).toString()),
          adjustedMonth.toString()
        );
      }
    };

    for (let i = 0; i < 6; i++) {
      const week = [];
      for (let j = 0; j < 7; j++) {
        if (i === 0 && j < firstDayOfMonth) {
          week.push(<td key={`empty-${j}`} className="p-2"></td>);
        } else if (dayCount > daysInMonth) {
          week.push(<td key={`empty-end-${j}`} className="p-2"></td>);
        } else {
          const personalMonthNumber = calculatePersonalMonthForDay(dayCount);
          const personalDayNumber = calculatePersonalDay(personalMonthNumber, dayCount.toString());
        
          // Calculate the full equation
          let equation = `${personalMonthNumber} + `;
          let daySum = 0;
        
          if (dayCount === 11 || dayCount === 22) {
            equation += dayCount;
            daySum = dayCount;
          } else {
            dayCount.toString().split('').forEach(digit => {
              equation += digit + ' + ';
              daySum += parseInt(digit);
            });
            equation = equation.slice(0, -3); // Remove the last ' + '
          }
        
          const totalSum = daySum + parseInt(personalMonthNumber);
          equation += ` = ${totalSum}`;
        
          if (totalSum === 28) {
            // Do nothing, keep 28 as is
          } else if (totalSum > 9 && totalSum !== 11 && totalSum !== 22) {
            equation += ` → ${personalDayNumber}`;
          }

          week.push(
            <td key={dayCount} className="p-2 border text-center relative">
              <div>{dayCount}</div>
              <div className="text-xs">
                PD={personalDayNumber}
                <span className="ml-1 cursor-pointer" title={equation}>
                  i
                </span>
              </div>
              {dayCount === parseInt(birthDay) && (
                <div className="text-xs text-blue-600">PM={personalMonthNumber}</div>
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
