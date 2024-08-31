const chineseZodiacSigns = [
  "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake",
  "Horse", "Goat", "Monkey", "Rooster", "Dog", "Pig"
];

const siderealZodiacSigns = [
  "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo",
  "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"
];

export const getChineseZodiac = (year, month, day) => {
  const lunarNewYear = getLunarNewYear(year);
  const birthDate = new Date(year, month - 1, day);
  
  let lunarYear = year;
  if (birthDate < lunarNewYear) {
    lunarYear -= 1;
  }
  
  const zodiacIndex = (lunarYear - 1900) % 12;
  return chineseZodiacSigns[zodiacIndex];
};

const getLunarNewYear = (year) => {
  // This is a simplified calculation. For precise results, you'd need a more complex algorithm or a lookup table.
  return new Date(year, 1, 5); // Approximating Lunar New Year to February 5th
};

export const getSiderealSunSign = (month, day) => {
  const zodiacSigns = [
    { sign: "Capricorn", startMonth: 1, startDay: 15 },
    { sign: "Aquarius", startMonth: 2, startDay: 15 },
    { sign: "Pisces", startMonth: 3, startDay: 15 },
    { sign: "Aries", startMonth: 4, startDay: 14 },
    { sign: "Taurus", startMonth: 5, startDay: 15 },
    { sign: "Gemini", startMonth: 6, startDay: 15 },
    { sign: "Cancer", startMonth: 7, startDay: 16 },
    { sign: "Leo", startMonth: 8, startDay: 17 },
    { sign: "Virgo", startMonth: 9, startDay: 17 },
    { sign: "Libra", startMonth: 10, startDay: 17 },
    { sign: "Scorpio", startMonth: 11, startDay: 16 },
    { sign: "Sagittarius", startMonth: 12, startDay: 16 },
  ];

  for (let i = 0; i < zodiacSigns.length; i++) {
    const currentSign = zodiacSigns[i];
    const nextSign = zodiacSigns[(i + 1) % zodiacSigns.length];

    if (
      (month === currentSign.startMonth && day >= currentSign.startDay) ||
      (month === nextSign.startMonth && day < nextSign.startDay) ||
      (month > currentSign.startMonth && month < nextSign.startMonth)
    ) {
      return currentSign.sign;
    }
  }

  return "Capricorn"; // Default to Capricorn if no match is found
};
