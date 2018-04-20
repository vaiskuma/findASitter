function calculateBill(total, tax = 0.13, tip = 0.15) {
    return total + (total * tax) + (total * tip);
}

const totalBill = calculateBill(100, 20, 30);

console.log(totalBill);

console.log(1 + 1 == 2 && 10 * 10 > 50)
console.log(2 && 10 * 10)
