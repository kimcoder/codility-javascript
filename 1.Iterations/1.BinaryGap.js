function solution(N) {
    let gapArr = N.toString(2).split("1");
    if(gapArr[gapArr.length - 1].match(/0/g)) {
        gapArr.pop();
    }
    return gapArr.sort((a, b) => b.length - a.length)[0].length;
}

console.log(solution(6));
console.log(solution(1041));
