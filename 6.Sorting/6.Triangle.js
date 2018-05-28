function solution(A) {
    if (A.length < 3) {
        return 0;    
    }
    
    let P;
    let Q;
    let R;
    let traiangle = [];
    
    const sortedA = A.slice().sort((a, b) => b - a);
    console.log(A);
    for(let i=1; i<sortedA.length-1; i++) {
        if(sortedA[i-1] < sortedA[i] + sortedA[i+1]){
            console.log(sortedA[i-1], sortedA[i], sortedA[i+1])
            P = sortedA[i-1];
            Q = sortedA[i];
            R = sortedA[i+1];
            traiangle.push(P);
            traiangle.push(Q);
            traiangle.push(R);
            break;
        }
    }
    traiangle.sort((a,b) => A.indexOf(a) - A.indexOf(b))
    console.log(traiangle);
    
    if (traiangle && (traiangle[0] + traiangle[1] > traiangle[2])) {
        return 1;
    } else {
        return 0;
    }
}