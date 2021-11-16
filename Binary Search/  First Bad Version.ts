/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

 var solution = function(isBadVersion: any) {

    return function(n: number): number {
        
        let left = 1;
        let right = n;
        
        while ( left < right ) {
            const mid = left + Math.floor((right - left) /2 ) ;
            
            if(isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    };
};

// precondition: Left, Right, Mid
// 1. Declare left = 1;
// 2. Declare right = n
// 3. Loop through ( left < right )
//    i. Declare mid = left + (right - left) / 2
//    ii. if(isBadVersion(mid)) >> right = mid
//    iii. else left = mid + 1
// 4. return left