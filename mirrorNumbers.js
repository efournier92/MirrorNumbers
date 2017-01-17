function isMirrorNum(input) {
  var inputNum = input.toString();
  var inputNumLength = inputNum.length;
  var firstIndex = 0;
  var lastIndex = inputNumLength - 1;

  while (firstIndex < (inputNumLength / 2)) {
    // use hash table to check matching pair of first digit
    var checkFirst = mirrorTable[inputNum[firstIndex]];
    // ensure last digit pairs with first digit
    if (!(checkFirst != undefined && checkFirst == inputNum[lastIndex])) {
      // if any digit doesn't pair with corresponding digit, input is not a valid mirror number
      return('FALSE: ' + input + ' is NOT a mirror number.');
    }
    // shift focus to next digit pair, moving inward
    firstIndex += 1;
    lastIndex -= 1;
    // repeat until no digits remain
  }
  return('TRUE: ' + input + ' IS a mirror number.');
}

var mirrorTable = {
  // the only mirror digits are 0, 1, & 8 
  // corresponding mirror digits must be equal
  "0": "0",
  "1": "1",
  "8": "8",
  // 2 & 5 are a mirror pair
  // if a digit is 2, the corresponding digit must be 5, and vice versa 
  "2": "5",
  "5": "2"
}
