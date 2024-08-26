export const addDigits = (num) => {
  if (num === 11 || num === 22 || num === 33) {
    return num;
  }
  let sum = 0;
  num.toString().split('').forEach(digit => {
    sum += parseInt(digit);
  });
  return sum > 9 ? addDigits(sum) : sum;
};

export const reduceNumber = (num, preserveEleven = false) => {
  if (num === 11 || num === 22 || num === 33) {
    return num;
  }
  const reduced = addDigits(num);
  return (preserveEleven && reduced === 2) ? 11 : reduced;
};

export const calculateNumber = (num1, num2) => {
  let sum = parseInt(num1) + parseInt(num2);
  return reduceNumber(sum).toString();
};

export const calculateLifePath = (birthdate) => {
  const [month, day, year] = birthdate.split('/');
  const sum = parseInt(calculateNumber(month, day)) + parseInt(year);
  return reduceNumber(sum, true).toString();
};

export const calculateDayBorn = (birthdate) => {
  const [, day] = birthdate.split('/');
  const dayNumber = parseInt(day);
  if (dayNumber === 11 || dayNumber === 22 || dayNumber === 33) {
    return dayNumber.toString();
  }
  return reduceNumber(dayNumber, true).toString();
};

export const calculateDayOfYear = (birthdate) => {
  const [month, day, year] = birthdate.split('/');
  const date = new Date(year, month - 1, day);
  const startOfYear = new Date(year, 0, 0);
  const diff = date - startOfYear;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  return dayOfYear.toString();
};

export const calculateMonthYear = (birthdate) => {
  const [month, , year] = birthdate.split('/');
  return calculateNumber(month, year);
};

export const calculateMonthDay = (birthdate) => {
  const [month, day] = birthdate.split('/');
  return calculateNumber(month, day);
};

export const calculateDayYear = (birthdate) => {
  const [, day, year] = birthdate.split('/');
  return calculateNumber(day, year);
};
