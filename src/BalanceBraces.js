function balancedBraces(inputStr) {
  var checkStr = '[]{}()';
  var stack = [];
  var i, character, bracePosition;

  for (i = 0; i < inputStr.length; i++) {
    character = inputStr[i];
    bracePosition = checkStr.indexOf(character);

    if (bracePosition === -1) {
      continue;
    }
    console.log(stack);

    if (bracePosition % 2 === 0) {
      stack.push(bracePosition + 1);
    } else if (stack.pop() !== bracePosition) {
      return 'NO';
    }
  }

  return stack.length === 0 ? 'YES' : 'NO';
}

var res = balancedBraces('[[llsdhjd{}]]'); //?
// balancedBraces('[]{}()'); //?
// balancedBraces('{]}'); //?
console.info(res);
