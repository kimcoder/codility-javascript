function solution(A, B) {
    if(A.length == 1) {
        return 1;
    }

    let alive = 0;
    let stack = [];
    
    for(let i=0; i<B.length; i++) {
        if (B[i] == 1) {
            stack.push(A[i]);
        } else {
            if(stack.length == 0) {
                alive ++;
            } else {
                if (B[i] === 1) {
                    stack.push(A[i]);
                } else {
                    for(let j=stack.length-1; j>-1; j--) {
                        if(stack[j] < A[i]) {
                            stack.pop();
                        } else {
                            break;
                        }
                    }
                    if(stack.length == 0) {
                        alive ++;
                    } 
                }
            }
        }
    }
    
    return alive + stack.length;
}

console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]))
console.log(solution([4, 3, 2, 1, 5], [0, 0, 0, 0, 0]))
console.log(solution([4, 3, 2, 1, 5], [1, 1, 1, 1, 1]))
console.log(solution([4, 3, 2, 1, 5], [1, 0, 1, 1, 0]))