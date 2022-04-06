
const Brackets = require('../bracketsSQ.js');

test ('Brackets is a class', () => {
  expect(typeof Brackets.prototype.constructor).toEqual('function');
});

test('Will return true on validateBracket with input {}', () => {

  const bracket = new Brackets;

  bracket.validateBrackets('[()]');

  expect(bracket.validateBrackets('[()]')).toEqual(true);
});

test('Will return true on validateBracket with input {}(){}', () => {

  const bracket = new Brackets;

  bracket.validateBrackets('{}(){}');

  expect(bracket.validateBrackets('{}(){}')).toEqual(true);
});

test('Will return false on validateBracket with input [({}]', () => {
  const bracket = new Brackets;

  bracket.validateBrackets('[({}]')

  expect(bracket.validateBrackets('[({}]')).toEqual(false);
})

test('Will return false on validateBracket with input {(})', () => {
  const bracket = new Brackets;

  bracket.validateBrackets('{(})')

  expect(bracket.validateBrackets('{(})')).toEqual(false);
})