const { getKey } = require('../src/index');

test('gets valid key', () => {
  const keyCode = 36;
  const testKey = "HOME";

  expect(getKey(keyCode)).toBe(testKey);
});

test('gets valid key when number is a string', () => {
  const keyCode = '36';
  const testKey = "HOME";

  expect(getKey(keyCode)).toBe(testKey);
})

test('return "NONE" if key code does not exist', () => {
  const testCode = 500;

  expect(getKey(testCode)).toBe('NONE');
});

test('return "NONE" if key is not a number', () => {
  const testCode = 'test key invalid';

  expect(getKey(testCode)).toBe('NONE');
});