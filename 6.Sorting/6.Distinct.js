function solution(A) {
    let value = 0;
    let counts = {};

    A.forEach(e => {
        if (!counts[e]) {
            counts[e] = 1;
            value ++;
        }
    });
    
    return value;
}