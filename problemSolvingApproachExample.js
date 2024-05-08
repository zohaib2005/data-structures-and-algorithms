/* Write a function which takes in a string and returns counts of each character in the string. */

function charCount(str) {
  // make object to return at end
  var result = {};
  // loop over string, for each character...
  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  // if the char is a number/letter AND is a key in object, add one to count
  // if the char is a number/letter AND not in object, add it to object and set value to 1
  // if character is something alse (space, period, etc.) don't do anything
  // return object at end
  return result;
}

console.log(charCount("Hello WORLD hi!!!"));

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) &&
    !(code > 64 && code < 91) &&
    !(code > 96 && code < 123)
  ) {
    return false;
  }
  return true;
}

/* {
    1: 1,
    2: 1,
    3: 1,
    4: 1,
    b: 1,
    e: 1,
    i: 2,
    m: 1,
    n: 2,
    o: 1,
    p: 1,
    r: 2,
    s: 1,
    u: 2,
    y: 1
}
*/
