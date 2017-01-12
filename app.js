function isMirrorNum(input) {
  var inputNum = input.toString();
  var inputNumLength = inputNum.length;
  var firstIndex = 0;
  var lastIndex = inputNumLength - 1;

  while (firstIndex < (inputNumLength / 2)) {
    if (!(isPair(inputNum[firstIndex], inputNum[lastIndex]))) {
      return('FALSE: ' + input + ' is NOT a mirror number.');
    }
    firstIndex += 1
    lastIndex -= 1
  }
  return('TRUE: ' + input + ' IS a mirror number.');
}

function isPair(first, last) {
  if (isMirrorChar(first) 
      && isMirrorChar(last)
      && first === last) { 
    return true;
  } else if (is25Pair(first, last)) {
    return true;
  } else {
    return false;
  }
}

function isOdd(num) {
  if (num % 2 == 0) {
    return true;
  } 
  else {
    return false;
  }
}

function isMirrorChar(num) {
const perfectMirrors = ["0", "1", "8"];
  if (perfectMirrors.includes(num)) {
    return true;
  } else {
    return false;
  }
}

function is25Pair(first, last) {
  if (first == 2 && last == 5 || first == 5 && last == 2) {
    return true;
  } else {
    return false;
  }
}

