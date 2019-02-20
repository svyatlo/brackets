module.exports = function check(str, bracketsConfig) {

  function change(element) {
    return element.replace(',', '')
  }

  function isStrHasPattern(str, arrayOfPatterns) {
    return arrayOfPatterns.some(pattern => str.includes(pattern));
  }

  let stringConfig = bracketsConfig.map(String).map(change);
  let strHasPattern = isStrHasPattern(str, stringConfig);

  while (strHasPattern) {
    stringConfig.forEach((pattern) => {
      if (str.includes(pattern)) {
        str = str.replace(pattern, '');
      }
    });

    strHasPattern = isStrHasPattern(str, stringConfig);
  }

  return str.length === 0;
}
