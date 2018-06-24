function solution(N, P, Q) {
    let hash = {};
    let nums = [];
    let counts = [0, 0];
    let primes = [];
    let semiPrimes = [];
    
    for(let i=0; i<N; i++) {
        nums.push(true);
    }
    
    for (let i=2; i<=Math.sqrt(N); i++) {
        if(nums[i]){
            for (let j=i*i; j<N; j+=i) {
                nums[j] = false;
            }   
        }
    }
    for(let i=2; i<=N; i++) {
        if (nums[i]) {
            primes.push(i);   
            for(let j=2; j<=Math.sqrt(N); j++) {
                if(nums[j]) {
                    hash[i*j] = true;   
                }
            }
        }
    }
    // console.log(hash)
    for(let i=1; i<=N; i++) {
        if (hash[i]) {
            semiPrimes.push(i);
            counts[i] = counts[i-1]+1;
        } else {
            counts[i] = counts[i-1];
        }
    }
    
    console.log(primes);
    console.log(semiPrimes);
    console.log(counts);
    
    
    return P.map((e, i) => counts[Q[i]]-counts[P[i]-1] );
}