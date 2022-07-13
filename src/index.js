const KEY_CODES = require('./CODES.json');

/**
 * Returns key associated with given keyCode
 * @param {*} keyCode code for the pressed key
 */
const getKey = (keyCode) => {
  try{
    const keyCodeNum = Number(keyCode);
    const key = Object.keys(KEY_CODES).find(key => KEY_CODES[key] === keyCodeNum);

    if(!key) return 'NONE';

    return key;
  }catch(err){
    return 'NONE';
  }
};

module.exports = {
  getKey,
  KEY_CODES
}