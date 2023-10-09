
  function calculateSum(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

const n = 5; // You can change the value of 'n' to calculate the sum for a different range.
console.log(calculateSum(n));
