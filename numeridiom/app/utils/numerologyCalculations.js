export const calculateLifePath = (birthdate) => {
  const [month, day, year] = birthdate.split('/');
  
  const addDigits = (num) => {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
  };

  let sum = addDigits(month) + addDigits(day) + addDigits(year);
  
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = addDigits(sum);
  }

  if (sum > 9) {
    return `${sum}/${addDigits(sum)}`;
  }

  return sum.toString();
};
