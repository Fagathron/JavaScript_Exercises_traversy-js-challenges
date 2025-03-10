const countOccurrences = require('./count-occurrences');

test('Count Occurrences of a Character', () => {
  expect(countOccurrences('hello', 'l')).toBe(2);
  expect(countOccurrences('programming', 'z')).toBe(0);
  expect(countOccurrences('banana', 'a')).toBe(3);
});
