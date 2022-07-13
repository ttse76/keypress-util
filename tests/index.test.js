const { getKey } = require('../src/index');

test('gets valid key', () => {
  const keyCode = 36;
  const testKey = "HOME";

  expect(getKey(keyCode)).toBe(testKey);
});

test('return -1 if key code does not exist', () => {
  const testCode = 500;

  expect(getKey(testCode)).toBe(-1);
});