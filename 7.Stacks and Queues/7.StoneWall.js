function solution(H) {
    const stack = [];
    let result = 0;
    
    H.forEach(e => {
        while (stack.length > 0 && stack[stack.length-1] > e) {
            stack.pop();
        }
        
        if(stack.length == 0 || e > stack[stack.length-1]) {
            stack.push(e);
            result++;
        }
    });
    
    return result;
}