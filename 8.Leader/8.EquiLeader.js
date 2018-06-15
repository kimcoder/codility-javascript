const isLeaderArray = (ar, leader) => {
    let count = (ar.toString().match(new RegExp(leader, "g")) || []).length; 
    return (count > ar.length/2);
}

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let leaders = {};
    let leaderNum = -1;
    let equiLeaders = 0;
    
    // console.log(A);
    for(let i=0; i<A.length; i++) {
        if (!leaders[A[i]]){
            leaders[A[i]] = 1;    
        } else {
            leaders[A[i]] ++;   
        }
        if(leaders[A[i]] >= A.length/2) {
            leaderNum = A[i];
        }
    }
    // console.log(leaders);
    // console.log(leaderNum);
    // console.log(leaders[leaderNum]);
    
    if (leaderNum == -1) {
        return equiLeaders;
    }
    
    let count = 0;
    for(i=0; i<A.length; i++) {
        if(A[i] == leaderNum) {
            count++;
        }
        
        if (count > (i+1)/2 && (leaders[leaderNum] - count) > (A.length-i-1)/2) {
            equiLeaders++;
        }
    }
    
    return equiLeaders;
}