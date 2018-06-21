function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    for(let i=0; i<=Math.sqrt(N); i++) {
        if(N%i == 0) {
            count += (i == N/i) ? 1 : 2;
        }        
    }
    return count;
}
