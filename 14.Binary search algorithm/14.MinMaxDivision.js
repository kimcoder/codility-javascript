// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(K, M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    // console.log(A);
    let min = 0;
    let max = 0;
    
    for (let i=0; i<A.length; i++) {
        max += A[i];
        min = Math.max(min, A[i]);
    }
    
    let result = max;
    while (min <= max) {
        let mid = Math.floor((min + max) / 2);
        
        if (isDivideBlock(A, K - 1, mid)) {
            max = mid - 1;
            result = mid;
            // console.log(`max:${max} result:${result} mid:${mid}`);
        } else {
            min = mid + 1;
            // console.log(`min:${min} result:${result} mid:${mid}`);
        }
    }
    
    return result;
}

const isDivideBlock = (A, K, max) => {
    let sum = 0;
    for (let i=0; i<A.length; i++) {
        sum += A[i];
        if (sum > max) {
            sum = A[i];
            K--;
        }
        if (K < 0) {
            return false;
        }
    }    
    return true;
}