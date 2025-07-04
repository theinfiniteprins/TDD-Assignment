function add(numbers) {
    if(numbers === "")return 0;

    let List_of_numbers = numbers.split(/,|\n/).map(Number);

    if (numbers.startsWith("//")) {
        const parts = numbers.split('\n');
        delimiter = new RegExp(parts[0].substring(2));
        numbers = parts[1];
        List_of_numbers = numbers.split(delimiter).map(Number);
    }

    let sum = 0;
    List_of_numbers.forEach(element => {
        sum += element;
    });
    return sum;
 }  

module.exports = { add };
