function solve(arr) {
    return arr.sort((a, b) => {
        if (a.length === b.legth) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    }).join('\n')
}
console.log(solve(['alpha',
    'beta',
    'gamma']
));