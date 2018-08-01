// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 0) {
        return 0;
    }
    
    let arr = [{ start: A[0], end: B[0] }];
    
    for(let i=1; i<A.length; i++) {
        const last = arr[arr.length-1];
        if (last.start < B[i] && last.end < A[i]) {
            arr.push({ start: A[i], end: B[i] });    
        }
    }
    console.log(arr);
    
    return arr.length;
}