function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let S = A.toString().replace(/,/g, "");
    if (S.charAt(0) === "1") {
        S = S.slice(S.indexOf("0"));
    }
    
    // console.log(S);
    // console.log(S.split("0"));
    
    const count = S.split("0").reduce((sum, e, i, arr) => sum += e.length * i, 0);
    return (count > 1000000000) ? -1 : count;
}

console.log(solution([0, 1, 0, 1, 1, 1, 0, 1, 1]));
console.log(solution([0, 1, 0, 1, 1, 1]));
console.log(solution([0]));
console.log(solution([1, 0, 0, 1, 1, 1]));
console.log(solution([1, 0]));
