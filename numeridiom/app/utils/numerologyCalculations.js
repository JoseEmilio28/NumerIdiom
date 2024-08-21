const addDigits = (num) => {
  if (num === 11 || num === 22 || num === 33) {
    return num;
  }
  let sum = 0;
  num.toString().split('').forEach(digit => {
    sum += parseInt(digit);
  });
  return sum === 20 ? 11 : sum;
};

const calculateNumber = (num1, num2) => {
  let sum = parseInt(num1) + parseInt(num2);
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = addDigits(sum);
  }
  return sum.toString();
};

export const calculateLifePath = (birthdate) => {
  const [month, day, year] = birthdate.split('/');
  return calculateNumber(calculateNumber(month, day), year);
};

export const calculateDayBorn = (birthdate) => {
  const [, day] = birthdate.split('/');
  return calculateNumber(day, '0');
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
