function getDigit(number: number, digitIndex: number) {
  return Number(number.toString().split("").reverse()[digitIndex]);
}

/*
 * getDigit("10410", 2) // 4
 */
