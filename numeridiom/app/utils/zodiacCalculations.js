const chineseZodiacSigns = [
  "Rat", "Ox", "Tiger", "Cat", "Dragon", "Snake",
  "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
];

const siderealZodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
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
  return chineseZodiacSigns[zodiacIndex];
};

export const getSiderealSunSign = (birthdate) => {
  const [month, day, year] = birthdate.split('/').map(Number);
  const birthDate = new Date(year, month - 1, day);
  
  // Sidereal zodiac dates (approximate)
  const zodiacDates = [
    { sign: "Aries", startMonth: 4, startDay: 14 },
    { sign: "Taurus", startMonth: 5, startDay: 15 },
    { sign: "Gemini", startMonth: 6, startDay: 15 },
    { sign: "Cancer", startMonth: 7, startDay: 16 },
    { sign: "Leo", startMonth: 8, startDay: 16 },
    { sign: "Virgo", startMonth: 9, startDay: 16 },
    { sign: "Libra", startMonth: 10, startDay: 16 },
    { sign: "Scorpio", startMonth: 11, startDay: 15 },
    { sign: "Sagittarius", startMonth: 12, startDay: 15 },
    { sign: "Capricorn", startMonth: 1, startDay: 14 },
    { sign: "Aquarius", startMonth: 2, startDay: 13 },
    { sign: "Pisces", startMonth: 3, startDay: 14 }
  ];

  for (let i = 0; i < zodiacDates.length; i++) {
    const currentSign = zodiacDates[i];
    const nextSign = zodiacDates[(i + 1) % zodiacDates.length];
    
    const startDate = new Date(year, currentSign.startMonth - 1, currentSign.startDay);
    const endDate = new Date(year, nextSign.startMonth - 1, nextSign.startDay);
    
    if (birthDate >= startDate && birthDate < endDate) {
      return currentSign.sign;
    }
  }
  
  return "Pisces"; // Default to Pisces if no match found
};
