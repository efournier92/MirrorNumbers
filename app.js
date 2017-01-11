function isMirrorNum(inputNum) {
  const perfectMirrors = [0, 1, 8];
  inputNum = inputNum.toString;
  inputNumLength = inNum.length;
  firstIndex = 0;
  lastIndex = len - 1;

  while (firstIndex < (len / 2)) {
    if (!(isPair(firstIdx, lastIdx))) {
      console.log('FALSE: ' + inputNum + ' is NOT a mirror number.');
      break;
    }
    firstIndex += 1
    lastIndex  -= 1
    console.log('TRUE: ' + inputNum + ' IS a mirror number.');
  }
}

function checkPair(first, last) {
  if perfectMirrors.includes(first) && perfectMirrors.includes(last) { 
    if first === last {
      return true;
    } else if (is25Pair) {
      return true;
    } else {
      return false;
    }
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
  if perfectMirrors.includes(num) {
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

