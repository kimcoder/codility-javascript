// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let count = 0;
    // console.log(A);
    // console.log(B);
    for (let i=0; i<A.length; i++) {
        const min = Math.min(A[i], B[i]);
        const max = Math.max(A[i], B[i]);
        
        if (min == max) {
            count++;
        } else {
            const gcd = getGcd(min, max);
            // let maxGcd = getGcd(max, gcd);
            // let minGcd = getGcd(min, gcd);
            if(check(max, gcd) && check(min, gcd)) {
                count ++;
            }
        }
    }
    return count;
}

const getGcd = (a,b) => (a%b == 0) ? b : getGcd(b, a%b);

const check = (a, b) => {
    let gcd = getGcd(a, b);
    if (gcd == a) {
        return true;
    } else if(gcd == 1) {
        return false;
    } else {
        a /= gcd;
        gcd = getGcd(a, gcd);
        return check(Math.max(a, gcd), Math.min(a, gcd));
    }
}