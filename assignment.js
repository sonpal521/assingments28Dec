// //Calculate the time complexity of Euclid’s Algorithm by subtraction
// Euclid’s Algorithm is a method for calculating the greatest common divisor of two integers.

const num1 = 462;
const num2 = 910;
const findGCD = (num1, num2) => {
    let a = Math.abs(num1);
    let b = Math.abs(num2);
    while (a && b && a !== b) {
        if (a > b) {
            [a, b] = [a - b, b];
        } else {
            [a, b] = [a, b - a];
        }
    }
    return a || b;
}
console.log(findGCD(num1, num2));

/**
 * For example,
gcd(25,10)
a=25, b=10
a=25-10 = 15, b=10
a=15-10 = 5, b=10
a = 5, b = 10 - 5 = 5, and have reached a = b = 5, means gcd(25,10) = 5
Time Complexity:
Here we can estimate the worst-case time complexity of our algorithm by thinking about the sum of
a+b and if we exclude base case, this sum will decrease at each recursive step.Since the smallest
possible deduction for each step is 1, and since all positive integers are guaranteed to have a
common divisor of 1, our time complexity will have an upper bound of O(a+b)
 */



