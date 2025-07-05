const { add } = require('../src/calculator'); // This file is empty now.

test('should return 0 for empty string', () => {
    expect(add("")).toBe(0);
});

test('should return number itself for single number string', () => {
    expect(add("1")).toBe(1);
    expect(add("5")).toBe(5);
});

test('should return sum for two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
    expect(add("4,6")).toBe(10);
});

test('should return sum for multiple comma-separated numbers', () => {
    expect(add("1,2,3,4")).toBe(10);
    expect(add("5,5,5,5")).toBe(20);
});

test('should handle new lines between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("5\n5\n5,5")).toBe(20);
});

test('should support custom delimiters', () =>{
    expect(add("//;\n1;2")).toBe(3);
    expect(add("//-\n5-6-7")).toBe(18);
});

test('should throw error for negative a number', () => {
    expect(() => add("//;\n1;-2;3")).toThrow("negative numbers not allowed -2");
    expect(() => add("//-\n2--2")).toThrow("negative numbers not allowed -2");
});

test('should throw error for negative numbers', () => {
    expect(() => add("//;\n1;-2;3;-4")).toThrow("negative numbers not allowed -2,-4");
});

test('numbers bigger than 1000 should be ignored', () => {
    expect(add("1,2,1002,4")).toBe(7);
    expect(add("5,5250,3500,5")).toBe(10);
});

test('should handle delimiters with any length', () =>{
    expect(add("//[DDU]\n1DDU2DDU3")).toBe(6);
});