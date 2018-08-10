// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (S.length % 2 === 1) {
        return 0;
    }
    
    let bracketOpen = 0;
    let bracketClose = 0;
    
    for (let i=0; i<S.length; i++) {
        const char = S.charAt(i);
        if (char === "(") {
            bracketOpen++;
        } else {
            if (bracketOpen > bracketClose) {
                bracketClose++;        
            }
        }
    }
    
    return (S.length === bracketOpen + bracketClose && bracketOpen === bracketClose) ? 1: 0; 
}