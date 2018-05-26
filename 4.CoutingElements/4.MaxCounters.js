function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // console.log(N, A);
    const maxCounter = N + 1;
    const arr = new Array(N).fill(0);
    let maxVal = 0;

    A.forEach(e => {
        if (maxCounter === e && maxVal > 0) {
            arr.fill(maxVal); 
        } else if (maxCounter > e) {
            arr[e-1] += 1;
            maxVal = Math.max(maxVal, arr[e-1]);
        }
    });

    return arr;
}

console.log(solution(5, [ 3, 4, 4, 6, 1, 4, 4 ]))
console.log(solution(5, [ 6, 6, 6, 6, 6, 6 ]));

