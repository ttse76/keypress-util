# Keypress Util
A lightweight module for getting keycodes

## Installation
`npm i keypress-util`

## Usage
To find a key, import the `KEY_CODES` object, then find the key in the list of keys.
```javascript
const { KEY_CODES } = require('keypress-util');
const code = KEY_CODES.SHIFT; // 16
```
To get a key based on a code, import the `getKey` function. All keycodes are numbers, `getKey` returns `"NONE"` if the keycode is either not a number or an invalid key. Numbers as a string are valid as long as the number is a valid keycode.
```javascript
const { getKey } = require('keypress-util');

const k0 = getKey(16); // "SHIFT"
const k1 = getKey('45') // "INSERT"
const k2 = getKey(500); // "NONE"
const k3 = getKey("Invalid Key"); // "NONE"
```
