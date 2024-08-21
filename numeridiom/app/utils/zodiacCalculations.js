const zodiacSigns = [
  "Rat", "Ox", "Tiger", "Cat", "Dragon", "Snake",
  "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
];

const lunarNewYearDates = {
  // This is a simplified version. In reality, you'd need a more comprehensive list
  2022: new Date(2022, 1, 1),
  2023: new Date(2023, 0, 22),
  2024: new Date(2024, 1, 10),
  2025: new Date(2025, 0, 29),
  // Add more years as needed
};

export const getChineseZodiac = (birthdate) => {
  const [month, day, year] = birthdate.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);
  
  let lunarYear = year;
  const newYearDate = lunarNewYearDates[year];
  
  if (newYearDate && birthDate < newYearDate) {
    lunarYear -= 1;
  } else if (!newYearDate) {
    // If we don't have the exact date, use February 1st as an approximation
    const approximateNewYear = new Date(year, 1, 1);
    if (birthDate < approximateNewYear) {
      lunarYear -= 1;
    }
  }
  
  const zodiacIndex = (lunarYear - 1900) % 12;
  return zodiacSigns[zodiacIndex];
};
