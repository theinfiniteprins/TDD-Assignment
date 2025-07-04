function add(numbers) {
    if(numbers === "")return 0;

    let delimiter = /,|\n/; // default delimiters: comma or newline

    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].substring(2));
        numbers = parts[1];
    }

    const nums = numbers.split(delimiter).map(Number);

    const negatives = nums.filter(num => num < 0);
    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return nums.reduce((sum,current) => sum += current,0);
 }  

module.exports = { add };
