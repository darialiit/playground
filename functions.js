export function capitalize(str) {
  if (str.length == 0) {
    return null;
  } else {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  }
}

export function reverseString(str) {
  return str.toLowerCase().split('').reverse().join('');
}

export const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

export function caesarCipher(str, key) {
  if (key >= 26) {
    throw Error('key must be less than 26');
  }
  const alf = 'abcdefghijklmnopqrstuvwxyz';
  const alfArr = alf.split('');
  const text = str.toLowerCase();
  let final = '';

  for (let i = 0; i < text.length; i++) {
    let oldLetterIndex = alfArr.indexOf(text[i]);
    let newLetter = '';
    newLetter = alfArr[oldLetterIndex + key];

    if (oldLetterIndex + key >= 26) {
      newLetter = alfArr[oldLetterIndex + key - 26];
    } else {
      newLetter = alfArr[oldLetterIndex + key];
    }
    final += newLetter;
  }

  return final;
}

export function analyzeArray(arr) {
  if (arr.length == 0) {
    throw Error('please add an array of numbers');
  }
  return {
    average: Math.round(
      arr.reduce((start, current) => start + current, 0) / arr.length
    ),
    min: arr.sort()[0],
    max: arr.sort()[arr.length - 1],
    length: arr.length,
  };
}
