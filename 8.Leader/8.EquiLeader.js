// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let hash = {};
    let leaderNum = undefined;
    let leaderNumTotal = 0;
    let leaderNumCount = 0;
    let equiLeaders = 0;
    
    A.forEach(e => {
       if(!hash[e]) {
            hash[e] = 0;        
       }
       hash[e]++;
       if (hash[e] > A.length/2) {
            leaderNum = e;
            leaderNumTotal = hash[e];
       }
    });
    
    if (leaderNum === undefined) {
        return 0;   
    }
    
    
    for (let i=0; i<A.length; i++) {
        if (A[i] === leaderNum) {
            leaderNumCount++;
        }
        
        let leftLeaderCount = leaderNumTotal - leaderNumCount;
        let leftElementHaf = (A.length - i-1)/2;
        
        if (leaderNumCount > (i+1)/2 && leftLeaderCount > leftElementHaf)  {
            equiLeaders++;               
        }
    }
    
    return equiLeaders;
}