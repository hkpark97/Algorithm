function mySqrt(x: number): number {
    
    let left = 1;
    let right = x;
    
    if( x < 2 ) {
        return x;
    }
    
    while( left < right ) {
        let mid = left + Math.floor((right - left) / 2);
        
        if( mid * mid === x ) {
            return mid;
        } else if (mid * mid > x) {
            right = mid;
        } else if (mid * mid < x) {
            left = mid + 1;
        }
    }
    
    return left - 1;

};

// 1. Identify Left and Right
// 2. Identify mid point
// 3. if x = 1 || x = 0, return x => 1*1 = 1, 0*0 = 0
// 4. Loop through left and right
//    i. mid = left + Math.floor((right - left) / 2)
//       => 1 + (10 -1) / 2 => 1 + 4 = 5
// 5. if (mid * mid === x) return mid => if 5 * 5 = 10
// 6. if (mid * mid > x) right = mid => eliminate right
// 7. if (mid * mid < x) left = mid + 1; // 4 * 4 = 16 => greater than x (which is 10)
// 8. return left - 1;
