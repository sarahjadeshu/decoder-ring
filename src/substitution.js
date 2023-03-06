// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    if (!alphabet) {
      return false;
    }
    if (alphabet.length !== 26) {
      return false;
    }
    if (Array.from(new Set(alphabet)).length !== 26) {
      return false;
    }
    let abc = 'abcdefghijklmnopqrstuvwxyz';
    alphabet = alphabet.split('');
    input = input.toLowerCase();
    let map = {};
    let decode = {};
    let result = '';
    abc.split('').forEach((letter, index) => {
      map[letter] = alphabet[index];
      decode[alphabet[index]] = letter;
    })
    if (!encode) {
      map = decode;
    }
    input.split('').forEach(input => {
      result += input === ' ' ? ' ' : map[input];
    })
    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
