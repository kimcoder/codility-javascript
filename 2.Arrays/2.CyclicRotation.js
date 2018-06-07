function solution(A, K) {
    K = K%A.length;
    if(K === 0) {
        return A;
    }
    
    return A.splice(A.length - K, A.length).concat(A);
}

console.log(solution([3, 8, 9, 7, 6], 3));
console.log(solution([1, 2, 3, 4], 4));
console.log(solution([5, -1000], 1));