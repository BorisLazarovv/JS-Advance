function solve(fruit, weight, price) {
    const weigthKg = weight /1000;
    const money = weigthKg * price;
    console.log(`I need $${money.toFixed(2)} to buy ${weigthKg.toFixed(2)} kilograms ${fruit}.`);

}
solve('orange', 2500, 1.80);
solve('apple', 1563, 2.35);