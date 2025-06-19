const calculator = {
  /**
   * Adds two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  add: (a, b) => {
    return Number(a) + Number(b);
  },

  /**
   * Subtracts two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Difference of a and b
   */
  subtract: (a, b) => {
    return Number(a) - Number(b);
  },

  /**
   * Multiplies two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Product of a and b
   */
  multiply: (a, b) => {
    return Number(a) * Number(b);
  },

  /**
   * Divides two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Quotient of a and b
   * @throws {Error} When dividing by zero
   */
  divide: (a, b) => {
    if (Number(b) === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return Number(a) / Number(b);
  }
};

module.exports = calculator; 