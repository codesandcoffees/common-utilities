/**
 * Converts a string to Sentence case.
 *
 * @module StringUtil
 * @name toSentenceCase
 * @param {String} string string to convert to Sentence case
 * @returns {String} Returns a Sentence case string.
 * @example
 *
 * StringUtil.toSentenceCase('THE QUICK BROWN FOX');
 * // => 'The quick brown fox'
 */
const toSentenceCase = (string) => {
  const returnStr = string.toLowerCase();
  return returnStr.charAt(0).toUpperCase() + returnStr.slice(1);
};

export default toSentenceCase;