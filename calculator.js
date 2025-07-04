function add(numbers) {
    if(numbers === "")return 0;

    let delimiter = /,|\n/; // default delimiters: comma or newline

    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].substring(2));
        numbers = parts[1];
    }

    const nums = numbers.split(delimiter).map(Number);

    nums.forEach(element => {
        if(element<0)throw new Error(`negative numbers not allowed ${element}`);
    });

    return nums.reduce((sum,current) => sum += current,0);
 }  

module.exports = { add };
