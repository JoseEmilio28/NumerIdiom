export const calculateLifePath = (birthdate) => {
  const [month, day, year] = birthdate.split('/');
  
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

  const monthSum = isMasterNumber(parseInt(month)) ? parseInt(month) : addDigits(month);
  const daySum = isMasterNumber(parseInt(day)) ? parseInt(day) : addDigits(day);
  const yearSum = addDigits(year);

  let sum = monthSum + daySum + yearSum;

  if (isMasterNumber(sum)) {
    return sum.toString();
  }

  while (sum > 9 && !isMasterNumber(sum)) {
    sum = addDigits(sum);
  }

  return sum.toString();
};
