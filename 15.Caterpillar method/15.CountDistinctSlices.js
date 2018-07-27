// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
    
function solution(M, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    let sliceHash = {};
    let sliceIdx = 0;
    
    for(let i=0; i<A.length; i++) {
        if (sliceHash[A[i]] && sliceIdx < sliceHash[A[i]]) {
            sliceIdx = sliceHash[A[i]];
        }
        
        count += i + 1 - sliceIdx;
        sliceHash[A[i]] = i + 1;
        // console.log(`i:${i} A[i]:${A[i]} sliceIdx:${sliceIdx} count:${count}`);
        if (count > 1000000000) {
            return 1000000000;
        }
    }
    
    return count;
}