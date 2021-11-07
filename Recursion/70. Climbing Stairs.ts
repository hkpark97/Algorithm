function climbStairs(n: number): number {
    
    const level = {
       "0": 1,
        "1": 1        
    };
    
    if ( n <= 1 ) return 1;
    
   for ( let i = 2; i <= n; i++ ) {
       level[i] = level[i-1] + level[i-2]; // 1
   }
return level[n];
};

// 1. Declare object variable contains 0, 1 which is equal to 1
// 2. Declare climbStairs
// 3. if  ( n <= 1 ) return 1;
// 4. Loop through level
//    i. let i = 2; i <= n; i++
//    ii. level[i] = level[i-1] + level[i-2]
// 5. return level[n]