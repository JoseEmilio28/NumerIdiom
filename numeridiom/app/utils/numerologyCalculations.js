export const calculateLifePath = (birthdate) => {
  const [month, day, year] = birthdate.split('/');
  
  const addDigits = (num) => {
    let sum = 0;
    num.toString().split('').forEach(digit => {
      sum += parseInt(digit);
      if (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
        sum = addDigits(sum);
      }
    });
    return sum;
  };

  let sum = addDigits(addDigits(month) + addDigits(day) + addDigits(year));
  
  if (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    return `${sum}/${addDigits(sum)}`;
  }

  return sum.toString();
};
