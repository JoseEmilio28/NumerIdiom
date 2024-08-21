export function processUFCData(ufcFighters) {
  const lifePath = {};
  const dayBorn = {};
  const chineseZodiac = {};
  const siderealSunSign = {};
  let totalFighters = 0;

  ufcFighters.forEach(division => {
    division.fighters.forEach(fighter => {
      totalFighters++;
      const lifePathKey = fighter.lifePath;
      const dayBornKey = fighter.dayBorn;
      lifePath[lifePathKey] = (lifePath[lifePathKey] || 0) + 1;
      dayBorn[dayBornKey] = (dayBorn[dayBornKey] || 0) + 1;
      chineseZodiac[fighter.chineseZodiac] = (chineseZodiac[fighter.chineseZodiac] || 0) + 1;
      siderealSunSign[fighter.siderealSunSign] = (siderealSunSign[fighter.siderealSunSign] || 0) + 1;
    });
  });

  const createChartData = (data, backgroundColor) => ({
    labels: Object.keys(data),
    datasets: [
      {
        data: Object.values(data),
        backgroundColor,
      },
    ],
  });

  return {
    data: {
      lifePath: createChartData(lifePath, [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
        '#9966FF', '#FF9F40',
      ]),
      dayBorn: createChartData(dayBorn, [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
        '#9966FF', '#FF9F40',
      ]),
      chineseZodiac: createChartData(chineseZodiac, [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
        '#9966FF', '#FF9F40',
      ]),
      siderealSunSign: createChartData(siderealSunSign, [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#FF9F40', '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
        '#9966FF', '#FF9F40',
      ]),
    },
    totalFighters,
  };
}
