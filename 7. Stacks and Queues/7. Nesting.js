function solution(S) {
    if (S.length === 0) {
        return 0;
    }

    const stack = [];
    for(let i=0; i<S.length; i++) {
        const char = S.charAt(i);
        if(char == "(") {
            stack.push(char);
        } else {
            if (stack.length == 0) {
                return 0;
            } else {
                stack.pop();
            }
        }
    }
    return (stack.length === 0) ? 1 : 0;
}


console.log(solution("()"))
console.log(solution("(())"))
console.log(solution("())"))
console.log(solution("((((()()))))"))