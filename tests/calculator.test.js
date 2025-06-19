const calculator = require('../src/calculator');

describe('Calculator Tests', () => {
  describe('add function', () => {
    test('should add two positive numbers correctly', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('should add negative numbers correctly', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });

    test('should add zero correctly', () => {
      expect(calculator.add(5, 0)).toBe(5);
    });
  });

  describe('subtract function', () => {
    test('should subtract two positive numbers correctly', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should subtract negative numbers correctly', () => {
      expect(calculator.subtract(-2, -3)).toBe(1);
    });

    test('should subtract zero correctly', () => {
      expect(calculator.subtract(5, 0)).toBe(5);
    });
  });

  describe('multiply function', () => {
    test('should multiply two positive numbers correctly', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('should multiply by zero correctly', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });

    test('should multiply negative numbers correctly', () => {
      expect(calculator.multiply(-2, 3)).toBe(-6);
    });
  });

  describe('divide function', () => {
    test('should divide two positive numbers correctly', () => {
      expect(calculator.divide(6, 2)).toBe(3);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });

    test('should handle decimal results', () => {
      expect(calculator.divide(5, 2)).toBe(2.5);
    });
  });
}); 