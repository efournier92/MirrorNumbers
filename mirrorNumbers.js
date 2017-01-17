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
      return('FALSE: ' + input + ' is NOT a mirror number.');
    }
    firstIndex += 1;
    lastIndex -= 1;
  }
  return('TRUE: ' + input + ' IS a mirror number.');
}

var mirrorTable = {
  "0": "0",
  "1": "1",
  "8": "8",
  "2": "5",
  "5": "2"
}
