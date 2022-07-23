const stringLength = (string) => {
  const length = string.length;
  if (length < 1) {
    throw 'String is empty';
  } else if (length > 10) {
    throw 'String Length is greater than 10';
  } else {
    return length;
  }
}

const reverseString = (string) => {
  return string.split('').reverse().join('');
}

const capitalize = (string) => {
  return string.charAt(0).toUpperCase().concat(string.slice(1));
}

class Calculator {
  add = (a, b) => {
    return a + b;
  }

  subtract = (a, b) => {
    return a - b;
  }

  multiply = (a, b) => {
    return a * b;
  }

  divide = (a, b) => {
    return a / b;
  }
}

module.exports = { stringLength, reverseString, capitalize, Calculator };