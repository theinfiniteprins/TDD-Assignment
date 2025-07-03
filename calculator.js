function add(numbers) {
    if(numbers === "")return 0;

    let List_of_numbers = numbers.split(/,|\n/).map(Number);
    let sum = 0;
    List_of_numbers.forEach(element => {
        sum += element;
    });
    return sum;
 }  

module.exports = { add };
