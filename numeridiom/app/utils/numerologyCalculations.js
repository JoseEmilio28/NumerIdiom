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
    if (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      return addDigits(sum);
    }
    return sum;
  };

  const monthSum = addDigits(month);
  const daySum = addDigits(day);
  const yearSum = addDigits(year);

  let sum = addDigits(monthSum + daySum + yearSum);
  
  if (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    return `${sum}/${addDigits(sum)}`;
  }

  return sum.toString();
};
