function search(nums: number[], target: number): number {
    
    let mid = 0;
    let left = 0;
    let right = nums.length -1;
    
    while( left <= right ) {
        mid = left + Math.floor((right - left)/2);
        
        if (nums[mid] === target) {
            return mid;
        }
        if( target < nums[mid] ) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    return -1;     
};