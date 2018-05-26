function solution(A, K) {
    if(A.length === 0) {
        return [];
    }
    for(let i=0; i<K; i++) {
        A.unshift(A.pop());
    }
    return A;
}

console.log(solution([3, 8, 9, 7, 6], 3));
console.log(solution([1, 2, 3, 4], 4));
console.log(solution([5, -1000], 1));