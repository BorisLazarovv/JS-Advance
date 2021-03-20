function solve(number) {
    return number
    .sort((a, b) => a - b)
    .slice(number.length /2);
}
console.log(solve([4,7,2,5]));