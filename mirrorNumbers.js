function isMirrorNum(input) {
  var inputNum = input.toString();
  var inputNumLength = inputNum.length;
  var firstIndex = 0;
  var lastIndex = inputNumLength - 1;

  while (firstIndex < (inputNumLength / 2)) {
    // pair the first digit with the last digit
    if (!(isPair(inputNum[firstIndex], inputNum[lastIndex]))) {
      // if any pair doesn't match, input is not a valid mirror number
      return('FALSE: ' + input + ' is NOT a mirror number.');
    }
    // shift focus to next digit pair, moving inward
    firstIndex += 1;
    lastIndex -= 1;
    // repeat until no digits remain
  }
  return('TRUE: ' + input + ' IS a mirror number.');
}

function isPair(first, last) {
  // the only mirror digits are 0, 1, & 8 
  if (isMirrorDigit(first) 
      && isMirrorDigit(last)
      // corresponding mirror digits must be equal
      && first === last) { 
    return true;
    // 2 & 5 are a mirror pair
    // if a digit is 2, the corresponding digit must be 5, and vice versa 
  } else if (is25Pair(first, last)) {
    return true;
  } else {
    return false;
  }
}

function isMirrorDigit(num) {
  var perfectMirrors = ["0", "1", "8"];
  if (perfectMirrors.includes(num)) {
    return true;
  } else {
    return false;
  }
}

function is25Pair(first, last) {
  if ((first == 2 && last == 5) || (first == 5 && last == 2)) {
    return true;
  } else {
    return false;
  }
}
