function solution(A) {
    if (A.length == 1) {
        return 0;
    }
    let nums = {};
    let maxNum = 0;
    
    A.forEach(e => {
        if (!nums[e]) {
            nums[e] = 0;
        }
        nums[e]++;
    });
    
    if (Object.keys(nums).length == 1) {
        return 0;
    }
    for(let k in nums) {
        maxNum = Math.max(maxNum, nums[k]);
        if (nums[k] == maxNum && maxNum > A.length/2) {
            return A.indexOf(Number(k));
        }
    }
    
    return -1;
}