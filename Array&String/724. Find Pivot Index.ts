function pivotIndex(nums: number[]): number {
    
    let totalSum = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        totalSum += nums[i];
    }
    
    let leftSum = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        if ( i != 0 ) leftSum += nums[i-1];
        if ( totalSum - leftSum - nums[i] == leftSum ) {
            return i;
        }
    }
    
    return -1;

};

// Total_sum 
// [1,7,3,6,5,6] = 28
// Left_sum
// [1,7,3,6,5,6] = 11
// totalSum - leftSum = 17

// Total_sum += nums[i]

// 28 - 11 = 17 - 6 = 11
// totalSum - leftSum - nums[i] == leftSum

// 1. Loop through total sum
// 2. Loop through left sum 
//    i. check if i is not equal to 0, if not, leftSum + nums[i-i]
//    ii. if totalSum - leftSum - nums[i] == leftSum >> retrun i
// 3. return -1