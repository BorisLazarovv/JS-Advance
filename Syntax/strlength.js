function solve(a, b, c) {
    let total = 0;
    total += a.length;
    total += b.length;
    total += c.length;
    let avr = Math.floor(total /3);

    console.log(total);
    console.log(avr);
}
solve('chocolate', 'ice cream', 'cake')