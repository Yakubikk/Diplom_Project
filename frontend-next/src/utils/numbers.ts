const getNumberFromIndex = (index: number): string => {
  const number = index + 1;

  return number < 10 ? `0${number}` : number.toString();
};

export { getNumberFromIndex };
