function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const length = A.length;
    const peaks = [];
    let maxBlock = 0;
    
    for (let i=1; i<length-1; i++) {
        if (A[i-1] < A[i] && A[i] > A[i+1]) {
            peaks.push(i);
        }
    }
    
    if (peaks.length < 2) {
        return peaks.length;
    } 
    
    for(let i=1; i<=length; i++) {
        if(length % i === 0) {
            const blockSize = i;
            const blockCount = length / i;
            
            if(blockSize < 3) {
                continue;
            }
            
            let lastGroup = -1;
            for(let j=0; j<peaks.length; j++) {
                if(parseInt(peaks[j]/blockSize) === lastGroup + 1) {
                    lastGroup++;
                }
            }
            
            if (lastGroup + 1 === blockCount) {
                if(blockCount > maxBlock) {
                    maxBlock = blockCount;
                }
            }
        }
    }

    return maxBlock;    
}