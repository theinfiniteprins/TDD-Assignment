const { add } = require('./calculator'); // This file is empty now.

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
