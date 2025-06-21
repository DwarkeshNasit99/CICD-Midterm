const stringUtils = require('../src/stringUtils');

describe('String Utils Tests', () => {
  describe('reverse function', () => {
    test('should reverse a simple string', () => {
      expect(stringUtils.reverse('hello')).toBe('olleh');
    });

    test('should reverse a palindrome', () => {
      expect(stringUtils.reverse('racecar')).toBe('racecar');
    });

    test('should handle empty string', () => {
      expect(stringUtils.reverse('')).toBe('');
    });

    test('should handle single character', () => {
      expect(stringUtils.reverse('a')).toBe('a');
    });
  });

  describe('capitalize function', () => {
    test('should capitalize first letter of a word', () => {
      expect(stringUtils.capitalize('hello')).toBe('Hello');
    });

    test('should handle already capitalized word', () => {
      expect(stringUtils.capitalize('Hello')).toBe('Hello');
    });

    test('should handle empty string', () => {
      expect(stringUtils.capitalize('')).toBe('');
    });

    test('should handle single character', () => {
      expect(stringUtils.capitalize('a')).toBe('A');
    });
  });

  describe('countVowels function', () => {
    test('should count vowels in a word', () => {
      expect(stringUtils.countVowels('hello')).toBe(2);
    });

    test('should count vowels with mixed case', () => {
      expect(stringUtils.countVowels('HELLO')).toBe(2);
    });

    test('should return 0 for words without vowels', () => {
      expect(stringUtils.countVowels('rhythm')).toBe(0);
    });

    test('should handle empty string', () => {
      expect(stringUtils.countVowels('')).toBe(0);
    });
  });
}); 