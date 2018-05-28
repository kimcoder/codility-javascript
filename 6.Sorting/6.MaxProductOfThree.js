function solution(A) {
    A = A.sort((a, b) => b - a);
    
    return Math.max(A[0] * A[1] * A[2], A.pop() * A.pop() * A[0]);
}