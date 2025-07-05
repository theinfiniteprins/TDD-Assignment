function add(numbers) {
    if(numbers === "") return 0;
    
    let delimiter = /,|\n/; // default delimiters: comma or newline
    
    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n');
        delimiter = parts[0].substring(2);
        if (delimiter.startsWith("[") && delimiter.endsWith("]")) {
            delimiter = delimiter.slice(1, -1);
        }
        delimiter = new RegExp(delimiter);
        numbers = parts[1];
    }
    
    let parts = numbers.split(delimiter);
    let nums = [];
    
    for (let i = 0; i < parts.length; i++) {
        if (parts[i] === "" && i + 1 < parts.length) {
            // Empty string followed by another part means we have a negative number
            nums.push(Number("-" + parts[i + 1]));
            i++; // Skip the next part as we've already processed it
        } else if (parts[i] !== "") {
            nums.push(Number(parts[i]));
        }
    }
    
    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }
    
    nums = nums.filter(num => num <= 1000);
    return nums.reduce((sum, current) => sum += current, 0);
}

module.exports = { add };