const stringUtils = {
  /**
   * Reverses a string
   * @param {string} str - The string to reverse
   * @returns {string} The reversed string
   */
  reverse: (str) => {
    return str.split('').reverse().join('');
  },

  /**
   * Capitalizes the first letter of a string
   * @param {string} str - The string to capitalize
   * @returns {string} The string with first letter capitalized
   */
  capitalize: (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  /**
   * Counts the number of vowels in a string
   * @param {string} str - The string to count vowels in
   * @returns {number} The number of vowels
   */
  countVowels: (str) => {
    return (str.toLowerCase().match(/[aeiou]/g) || []).length;
  }
};

module.exports = { stringUtils };