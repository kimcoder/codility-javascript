// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, M) {
    // write your code in JavaScript (Node.js 8.9.4)
    const getGcd = (a, b) => {
        return (a%b == 0) ? b : getGcd(b, a%b)
    };
    const lcm = (N*M)/getGcd(N, M);
    return lcm/M;
}