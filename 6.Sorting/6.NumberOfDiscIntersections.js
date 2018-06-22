function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const numPoints =  A.length;
    let numIntersections = 0;
    let disc = A.map((e, i) => [i - e, i + e]).sort((a,b) => a[0] - b[0]);
    let count = 0;
    console.log(disc);
    
    for (let i=0; i<A.length; i++) {
        const discRight = disc[i][1];
        for(let j=i+1; j<A.length; j++) {
            if(disc[j][0] <= discRight){
                count++;
                if(count > 10000000) {
                    return -1;
                }
            } else {
                break;
            }
        }
    }
    return count;
}