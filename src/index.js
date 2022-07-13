const keyCodes = require('./CODES.json');

/**
 * Returns key associated with given keyCode
 * @param {*} keyCode code for the pressed key
 */
const getKey = (keyCode) => {
  try{
    const keyCodeNum = Number(keyCode);
    const code = Object.keys(keyCodes).find(key => keyCodes[key] === keyCodeNum);

    if(!code) return -1;

    return code;
  }catch(err){
    return -1
  }
};

module.exports = {
  getKey
}