let prices = [];

for (let i = 1; i <= 5; i++) {
    let price = parseFloat(prompt(`Enter price for item ${i}:`));
    if (!isNaN(price) && price >= 0) {
        prices.push(price);
    } else {
        console.log(`Invalid input for item ${i}. Try again.`);
        i--;
    }
}

let total = prices.reduce((sum, price) => sum + price, 0);

console.log("Prices of items: ", prices.join(", "));
console.log("Total: $" + total.toFixed(2));
