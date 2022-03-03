export const otherNumber = (n) => {
  const IsValidNumber = n === 3 || n === 8 ? true : false;
  const IsNumbmerThree = n === 3 ? true : false;
  const finalNumber = IsNumbmerThree ? 8 : 3;
  return IsValidNumber ? finalNumber : 'not a valid number';
};
