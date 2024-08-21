const addDigits = (num) => {
  if (num === 11 || num === 22 || num === 33) {
    return num;
  }
  let sum = 0;
  num.toString().split('').forEach(digit => {
    sum += parseInt(digit);
  });
  return sum;
};

const isMasterNumber = (num) => num === 11 || num === 22 || num === 33;

const calculateNumber = (num1, num2) => {
  const sum1 = isMasterNumber(parseInt(num1)) ? parseInt(num1) : addDigits(num1);
  const sum2 = isMasterNumber(parseInt(num2)) ? parseInt(num2) : addDigits(num2);
  let sum = sum1 + sum2;

  if (isMasterNumber(sum)) {
    return sum.toString();
  }

  while (sum > 9 && !isMasterNumber(sum)) {
    sum = addDigits(sum);
  }

  return sum === 20 ? '11' : sum.toString();
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
