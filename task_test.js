const processList = require('./task.js');

test('valid input', () => {
  const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const expectedOutput = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  expect(processList(inputList)).toEqual(expectedOutput);
});

test('invalid input', () => {
  const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
  expect(processList(inputList)).toBeUndefined();
});