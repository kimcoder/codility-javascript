function solution(S) {
    if (S.length === 0) {
        return 1;
    }

    const stack = [];
    for(let i=0; i<S.length; i++) {
        const char = S.charAt(i);
        if (char.search(/(\(|\{|\[)/) > -1) {
            stack.push(char);
        } else {
            if (stack.length === 0 ) {
                return 0;
            }
            const opener = stack.pop();
            if (opener == "(" && char != ")") {
                return 0;
            } else if (opener == "[" && char != "]") {
                return 0;
            } else if (opener == "{" && char != "}") {
                return 0;
            }
        }
    }
    
    return (stack.length === 0) ? 1 : 0;
}
console.log(solution("{[()()]}"));
console.log(solution("{([[()()]}"));
console.log(solution("()(()())((()())(()()))"));
let S = ""
for(let i=0; i<10000; i++){
    S += "("
}
for(i=0; i<10000; i++){
    S += ")"   
}
console.log(solution(S));