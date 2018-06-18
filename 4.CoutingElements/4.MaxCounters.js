function solution(N, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let value = new Array(N).fill(0);
    let maxCounter = 0;
    let max = 0;
    
    A.forEach(e => {
        if(e == N+1) {
            maxCounter = max;
        } else if (1 <= e && e <= N) {
            if(value[e-1] < maxCounter) {
                value[e-1] = maxCounter;
            }
            value[e-1] += 1;
            max = Math.max(max, value[e-1]);
        }
    });
    return value.map((e) => (e < maxCounter) ? maxCounter : e);
}

console.log(solution(5, [ 3, 4, 4, 6, 1, 4, 4 ]))
console.log(solution(5, [ 6, 6, 6, 6, 6, 6 ]));

