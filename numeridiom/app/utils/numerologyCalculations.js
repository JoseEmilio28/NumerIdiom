const addDigits = (num) => {
  if (num === 11 || num === 22 || num === 33 || num === 20) {
    return num;
  }
  let sum = 0;
  num.toString().split('').forEach(digit => {
    sum += parseInt(digit);
  });
  return sum;
};

const isMasterNumber = (num) => num === 11 || num === 22 || num === 33 || num === 20;

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

export const calculatePersonalityNumber = (name) => {
  const consonants = name.replace(/[aeiou]/gi, '').toLowerCase();
  const nameSum = consonants.split('').reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);
  return calculateNumber(nameSum.toString(), '0');
};

export const calculateSoulUrgeNumber = (name) => {
  const vowels = name.replace(/[^aeiou]/gi, '').toLowerCase();
  const nameSum = vowels.split('').reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);
  return calculateNumber(nameSum.toString(), '0');
};

export const calculateDestinyNumber = (birthdate) => {
  const [month, day, year] = birthdate.split('/');
  const destinySum = (parseInt(month) + parseInt(day) + parseInt(year)).toString();
  return calculateNumber(destinySum, '0');
};

export const calculateKarmicDebtNumber = (birthdate) => {
  const [month, day, year] = birthdate.split('/');
  const karmicDebtSum = (parseInt(month) + parseInt(day) + parseInt(year)).toString();
  return calculateNumber(karmicDebtSum, '0');
};

export const calculateExpressionNumber = (name) => {
  const nameSum = name.replace(/[^a-zA-Z]/g, '').toLowerCase().split('').reduce((sum, char) => sum + (char.charCodeAt(0) - 96), 0);
  return calculateNumber(nameSum.toString(), '0');
};

export const calculateMaturityNumber = (birthdate) => {
  const lifePath = calculateLifePath(birthdate);
  const destiny = calculateDestinyNumber(birthdate);
  return calculateNumber(lifePath, destiny);
};
