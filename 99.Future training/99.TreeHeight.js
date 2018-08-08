// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(T) {
    // write your code in JavaScript (Node.js 8.9.4)
    return searchTree(T);
}

const searchTree = (node) => {
    if (node) {
        let left = searchTree(node.l);
        let right = searchTree(node.r);
        
        return 1 + Math.max(left, right);
    } else {
        return -1;
    }
}