// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (A.length === 0) {
        return 0;
    }
    let result = { count: 0 };
    A = mergeSort(A, result);
    
    console.log(A);
    console.log(result);
    return (result.count > 1000000000) ? -1 : result.count;
}

const mergeSort = (A, value) => {
    if (A.length === 1) {
        return A;
    } else {
        let half = Math.floor(A.length / 2);
        let left = A.slice(0, half);
        let right = A.slice(half, A.length);
        
        return merge(mergeSort(left, value), mergeSort(right, value), value);
    }
}

const merge = (left, right, value) => {
    let leftIdx = 0;
    let rightIdx = 0;
    let result = [];
    
    while (leftIdx < left.length && rightIdx < right.length) {
        if (left[leftIdx] > right[rightIdx]) {
            value.count += left.length - leftIdx;
            result.push(right[rightIdx]);
            rightIdx++;
        } else {
            result.push(left[leftIdx]);
            leftIdx++;
        }
    }
    
    return result.concat(left.slice(leftIdx)).concat(right.slice(rightIdx));
}