// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
const fibonacci = (N) => {
    const fib = [];
    let a = 0;
    let b = 1;
    let tmp;
    while(b < N) {
        tmp = b;
        b = a + b;
        a = tmp;
        fib.push(b);
    }
    return fib;
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    console.log(A.toString());
    A = [1].concat(A, [1]);
    const fib = fibonacci(A.length + 1);
    const dp = A.map(e => 0);
    dp[0] = 1;
    
    for (let i=0; i<A.length-1; i++) {
        if (A[i] == 1) {
            for (let j=0; j<fib.length; j++) {
                const idx = i + fib[j];
                if (dp[i] > 0 && A[idx] == 1)  {
                    // console.log(`FOUND - i:${i} idx:${idx} fib[j]:${fib[j]} dp[i]:${dp[i]}]`);
                    if (idx == A.length - 1 && i == 0) {
                        return 1;
                    }
                    if (idx == A.length - 1 && dp[idx] > 0) {
                        dp[idx] = Math.min(dp[idx], dp[i] + 1);
                    } else {
                        if (dp[idx] == 0) {
                            dp[idx] = (i == 0) ? 1 : dp[i] + 1;
                        } else {
                            dp[idx] = Math.min(dp[idx], dp[i]+1);
                        }
                    }
                }
            }    
        }
    }
    console.log(dp.toString());
    return (dp[dp.length - 1] > 0) ? dp[dp.length - 1] : -1;
}