/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
   
    let count = 0;
    let jewelsHT = {}; //{a: true, A: true}
    
    for ( const J of jewels ) {
        jewelsHT[J] = true;
    } 
    
    for ( const S of stones ) {
        if ( S in jewelsHT ) {
            count+=1;
        }
    }
    return count;
    
};

// 1. Declare count as 0
// 2. Make jewelsHT as an empty object that can accepts all the letters of J and S
// 3. Use 'for' loop for jwels
// 4. jewels has table index has jwels >> true;
// 5. Use 'for' loop for stones
// 6. if stones in jewelsHT >> count+=1
// 7. return count