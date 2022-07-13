const KEY_CODES = require('./CODES.json');

/**
 * Returns key associated with given keyCode
 * @param {*} keyCode code for the pressed key
 */
const getKey = (keyCode) => {
  try{
    const keyCodeNum = Number(keyCode);
    const key = Object.keys(KEY_CODES).find(key => KEY_CODES[key] === keyCodeNum);

    if(!key) return -1;

    return key;
  }catch(err){
    return -1
  }
};

module.exports = {
  getKey,
  KEY_CODES
}