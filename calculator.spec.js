const { add } = require('./calculator'); // This file is empty now.

test('should return 0 for empty string', () => {
    expect(add("")).toBe(0);
});
