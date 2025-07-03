function add(numbers) {
    if(numbers === "")return 0;

    let nums = numbers.split(/,|\n/).map(Number);
    let sum = 0;
    nums.forEach(element => {
        sum += element;
    });
    return sum;
 }

module.exports = { add };
