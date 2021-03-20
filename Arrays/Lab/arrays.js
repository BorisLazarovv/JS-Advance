const solve = (arr, deliminter) => {
    let result = '';

    for (let i = 0; i < arr.length; i++) {
        result += i == arr.length - 1 ? arr[i] : arr[i] + deliminter;
    }
    return result;
}
console.log(solve(
    ['One',
        'Two',
        'Three',
        'Four',
        'Five'],
    '-'
));
//const solve = (arr,deliminter) => arr.join(deliminter);