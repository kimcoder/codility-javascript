function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    const arr = new Array(P.length);
    let length = P.length;
    let start;
    let last;
    let value;
    S = S.replace(/A/g, 1).replace(/C/g, 2).replace(/G/g, 3).replace(/T/g, 4)
    
    for(let i=0; i<length; i++) {
        start = P[i];
        last = Q[i];
        
        if (start === last) {
            arr[i] = Number(S.charAt(start));
        } else {
            let sliced = S.substring(start, last +1);
            if (sliced.indexOf("1") > -1) {
                arr[i] = 1;
            } else if (sliced.indexOf("2") > -1) {
                arr[i] = 2;
            } else if (sliced.indexOf("3") > -1) {
                arr[i] = 3;
            } else {
                arr[i] = 4;
            }
        }
    }
    return arr; 
}